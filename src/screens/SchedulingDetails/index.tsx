import { useEffect, useState } from "react";
import { format } from "date-fns";
import { Alert, StatusBar } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

import theme from "../../theme";
import { getAccessoryIcon } from "../../utils/getAccessoryIcon";
import { getPlataformDate } from "../../utils/getPlataformDate";
import { api } from "../../services/api";
import { Car as CarDTO } from "../../dto/Car";

import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";
import { Accessory } from "../../components/Accessory";
import { Button } from "../../components/Button";


import { 
    Accessories,
    Brand, 
    CalendarIcon, 
    CarImages, 
    Container, 
    Content, 
    DateInfo, 
    DateTitle, 
    DateValue, 
    Description, 
    Details, 
    Footer, 
    Header, 
    Name, 
    Period, 
    Price, 
    Rent, 
    RentPeriod,
    RentTotal,
    TotalDays,
    TotalResume,
    TotalTitle,
    TotalValue
} from "./styles";
import { useNetInfo } from "@react-native-community/netinfo";


type RouteParms = {
  car: CarDTO,
  dates: string[];
}

type RentalPeriod = {
  start: string;
  end: string;
}

export const SchedulingDetails = () => {
  const [carUpdated, setCarUpdated] = useState<CarDTO>({} as CarDTO);
  const [rentPeriod, setRentPeriod] = useState<RentalPeriod>({} as RentalPeriod);
  const navigation = useNavigation();
  
  const routes = useRoute();
  const { car, dates } = routes.params as RouteParms;

  const netInfo = useNetInfo();
  const isOnline = netInfo.isConnected === true;

  const rentTotal = Number(dates.length * car.price);

  const handleConfirmRental = async () => {

    try { 
      await api.post('/rentals', {
        user_id: 1,
        car_id: car.id,
        start_date: new Date(dates[0]),
        end_date: new Date(dates[dates.length - 1]),
      })
        .then(() => {
          navigation.navigate('confirmation', { 
            title: 'Carro alugado!',
            message: 'Agora você só precisa ir \n até a concessionária da RENTX',
            nextScreenRoute: 'home'
          })
      });
    } catch (err) {
      Alert.alert('Não foi possível confirmar o agendamento');
    }
  }

  useEffect(() => {
    setRentPeriod({
      start: format(getPlataformDate(new Date(dates[0])), 'dd/MM/yyyy'),
      end: format(getPlataformDate(new Date(dates[dates.length - 1])), 'dd/MM/yyyy'),
    })
  }, []);

  useEffect(() => {
    async function fetchOnlineData() {
      const response = await api.get(`cars/${car.id}`);
      setCarUpdated(response.data);
    }

    if (isOnline) {
      fetchOnlineData();
    } else {
    }
  }, [isOnline])

  return (
    <Container>
      <StatusBar 
        barStyle="dark-content"
        translucent
        backgroundColor='transparent'
      />
      <Header>
        <BackButton onPress={() => navigation.goBack()} />
      </Header>

      <CarImages>
        <ImageSlider
          imageUrl={
            !!carUpdated.photos ?
            carUpdated.photos : [{ id: car.thumbnail, photo: car.thumbnail }]
          }
        />
      </CarImages>
      
      <Content
        contentContainerStyle={{padding: 24, alignItems: "center"}}
        showsVerticalScrollIndicator={false}
      >
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>

          <Rent>
            <Period>{car.period}</Period>
            <Price>{`R$ ${car.price}`}</Price>
          </Rent>
        </Details>

        <Accessories>
          {car?.accessories?.map(accessory => (
            <Accessory 
              key={accessory.type}
              icon={getAccessoryIcon(accessory.type)} 
              title={accessory.name} 
            />
            ))}

        </Accessories>

        <RentPeriod>
          <CalendarIcon>
            <Feather 
              name="calendar"
              size={RFValue(24)}
              color={theme.color.shape}
            />
          </CalendarIcon>          
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>{rentPeriod.start}</DateValue>
          </DateInfo>

          <Feather 
              name="chevron-right"
              size={RFValue(16)}
              color={theme.color.text}
            />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue>{rentPeriod.end}</DateValue>
          </DateInfo>
        </RentPeriod>

        <RentTotal>
          <TotalResume>
            <TotalTitle>TOTAL</TotalTitle>
            <TotalDays>{`R$ ${car.price} x${dates.length} diárias`}</TotalDays>
          </TotalResume>

          <TotalValue>R$ {rentTotal}</TotalValue>
        </RentTotal>

      </Content>

      <Footer>
        <Button
          green 
          title="Alugar agora" 
          onPress={handleConfirmRental}
        />
      </Footer>
      

    </Container>
  );
}