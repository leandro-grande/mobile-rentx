import { useCallback, useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useNetInfo } from "@react-native-community/netinfo";
import { synchronize } from "@nozbe/watermelondb/sync";
import { database } from "../../database"
import { Car as ModelCar } from "../../database/model/Car";

import Logo from '../../assets/logo.svg';
import { RFValue } from "react-native-responsive-fontsize";
import { CardCar } from "../../components/CardCar";
import { api } from "../../services/api";
import { Loading } from "../../components/Loading";

import { CarList, Container, Header, HeaderContent, TotalCars } from "./styles";

export const Home = () => {
  const [cars, setCar] = useState<ModelCar[]>([]);
  const [loading, setLoading] = useState(true);

  const netInfo = useNetInfo();
  const navigation = useNavigation();

  const handleCarDetails = (carItem: ModelCar) => {
    navigation.navigate('carDetails', { car: carItem });
  }

  const offlineSynchronize = async () => {
    await synchronize({
      database,
      pullChanges: async ({ lastPulledAt }) => {     // vai no backend para buscar as modificações
        const response = await api.get(`cars/sync/pull?lastPulledVersion=${lastPulledAt || 0}`);

        const { changes, latestVersion } = response.data;
        console.log(changes)
        return { changes, timestamp: latestVersion };
      },
      pushChanges: async ({ changes }) => {    // envia as mudanças para o backend
        const user = changes.users;

        if (user) {
          await api.post("/users/sync", user)
        }
      },
    })
  }

  useEffect(() => {
    let isMounted = true;

    const fetchCars = async () => {
      try {
        const carCollection = database.get<ModelCar>('cars');
        const cars = await carCollection.query().fetch();

        if (isMounted) {
          setCar(cars);
        }
        
      } catch (err) {
        console.log(err);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }
    fetchCars();
    return () => {
      isMounted = false;
    };
  }, []);

  useFocusEffect(useCallback(() => {
      if (netInfo.isConnected) {
        offlineSynchronize()
      }
  
  }, [netInfo.isConnected]))


  return (
    <Container>
      <StatusBar 
        barStyle="light-content"
        backgroundColor='transparent'
        translucent
      />
    
      <Header>
        <HeaderContent>
          <Logo height={RFValue(12)} width={RFValue(108)}  />
          <TotalCars>{`Total de ${cars.length} carros`}</TotalCars>
        </HeaderContent>
      </Header>

      {loading ? <Loading /> :
        <CarList
          data={cars}
          keyExtractor={item => item.id}
          renderItem={({ item }) =>
            <CardCar data={item} onPress={() => handleCarDetails(item)} />
          }
        />
      }


    </Container>
  )
}