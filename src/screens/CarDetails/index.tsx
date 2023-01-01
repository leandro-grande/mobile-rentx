import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useNetInfo } from "@react-native-community/netinfo";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { StatusBar } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useSharedValue, useAnimatedScrollHandler, useAnimatedStyle, interpolate, Extrapolate } from "react-native-reanimated";
import { Car as CarDTO } from "../../dto/Car";
import { Car as ModelCar } from "../../database/model/Car";

import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";
import { Accessory } from "../../components/Accessory";
import { Button } from "../../components/Button";
import { getAccessoryIcon } from "../../utils/getAccessoryIcon";

import { 
        About,
        Accessories,
        AnimatedHeader,
        Content,
        Brand, 
        CarImages, 
        Container, 
        ScrollContent, 
        Description, 
        Details, 
        Footer, 
        Header, 
        Name, 
        Period, 
        Price, 
        Rent, 
        Offline
} from "./styles";
import { Loading } from "../../components/Loading";

export type RouteParams = {
  car: ModelCar
}

export const CarDetails = () => {
  const [carUpdated, setCarUpdated] = useState<CarDTO>({} as CarDTO);
  const [isLoading, setIsLoading] = useState(true);
  
  const scrollY = useSharedValue(0);

  const netInfo = useNetInfo();
  const isOnline = netInfo.isConnected === true;

  const navigation = useNavigation();
  const route = useRoute();
  const { car } = route.params as RouteParams;

  const handleCarDetails = () => {
    navigation.navigate('scheduling', { car });
  }

  const scrollHandler = useAnimatedScrollHandler(event => {
    scrollY.value = event.contentOffset.y;
  })
  

  const headerAnimatedStyle = useAnimatedStyle(() => ({
    height: interpolate(scrollY.value, [0, 200], [200, 120], Extrapolate.CLAMP)
  }));

  const carImageAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(scrollY.value, [0, 200 ], [1, 0], Extrapolate.CLAMP)
  }));

  useEffect(() => {
    async function fetchOnlineData() {
      setIsLoading(true);
      const response = await api.get(`cars/${car.id}`);
      setCarUpdated(response.data);

      setIsLoading(false);
    }

    if (isOnline) {
      fetchOnlineData();
    } else {
      setIsLoading(false);
    }
  }, [isOnline])

  return (
    <Container>
      <StatusBar 
        barStyle="dark-content"
        translucent
        backgroundColor='transparent'
      />

      {isLoading ?  ( 
        <Loading/> 
      ) : (  
        <Content>
      <AnimatedHeader style={headerAnimatedStyle}> 
        <Header>
          <BackButton onPress={() => navigation.goBack()} />
        </Header> 

        <CarImages style={carImageAnimatedStyle}>
          <ImageSlider
             imageUrl={
                !!carUpdated.photos ?
                carUpdated.photos : [{ id: car.thumbnail, photo: car.thumbnail }]
              }
          />
        </CarImages>
      </AnimatedHeader>


      <ScrollContent
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingTop: getStatusBarHeight() + 180,
        }}
        showsVerticalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
      >
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>

          <Rent>
            <Period>{car.period}</Period>
            <Price>R$ {isOnline ? car.price : '---'}</Price>
          </Rent>
        </Details>
        
        { isOnline && 
          <Accessories>
            {carUpdated?.accessories?.map(accessory => (
              <Accessory 
                key={accessory?.id}
                icon={getAccessoryIcon(accessory.type)} 
                title={accessory.name} 
              />
              ))}
          </Accessories>
        }

        <About>
          {car.about}
        </About>
      </ScrollContent>

      <Footer>
        <Button 
          title="Escolher período do aluguel" 
          onPress={handleCarDetails}
          enabled={isOnline}
        />
      </Footer>

      { !isOnline &&
        <Offline>
          Conecte-se a Internet para ver mais detalhes e agendar seu carro
        </Offline>
      }

      </Content>
      )}
    </Container>
  );
}