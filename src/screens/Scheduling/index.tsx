import { useState } from "react";
import { Alert, StatusBar } from "react-native"
import { useNavigation, useRoute } from "@react-navigation/native";

import ArrowSvg from "../../assets/arrow.svg";
import { BackButton } from "../../components/BackButton"
import { Button } from "../../components/Button";
import { Calendar, DayProps } from "../../components/Calendar";
import { generateInterval } from "../../components/Calendar/generateInterval";
import { MarkedDates } from "react-native-calendars/src/types";

import { 
    BackButtonArea, 
    Container, Content, 
    DateInfo, DateTitle, 
    DateValue, 
    Footer, 
    Header, 
    RentalPeriod, 
    Title 
  } from "./styles";
import { format } from "date-fns";
import { getPlataformDate } from "../../utils/getPlataformDate";
import { Car } from "../../dto/Car";
import { RouteParams } from "../CarDetails";

type RentalPeriod = {
  start: string;
  end: string;
}


export const Scheduling = () => {
  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>({} as DayProps);
  const [markedDates, setMarketDate] = useState<MarkedDates>({} as MarkedDates);
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod);

  const navigation = useNavigation();
  const route = useRoute();
  const { car } = route.params as RouteParams


  const handleConfirmRental = () => {
    if (!rentalPeriod.start|| !rentalPeriod.end ) {
      Alert.alert('Selecione o período para alugar!')
    } else {
      navigation.navigate('schedulingDetails', {
        car,
        dates: Object.keys(markedDates)
      });
    }
  }

  const handleChangeDate = (date: DayProps) => {
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
    let end = date;

    if (start.timestamp > end.timestamp) {
      start = end;
      end = start;
    }

    setLastSelectedDate(end);
    const interval = generateInterval(start, end);
    setMarketDate(interval);

    const firstDate = Object.keys(interval)[0];
    const endDate = Object.keys(interval)[Object.keys(interval).length - 1];

    setRentalPeriod({
      start: format(getPlataformDate( new Date(firstDate)), 'dd/MM/yyyy'),
      end: format(getPlataformDate( new Date(endDate)), 'dd/MM/yyyy'),
    })
  }

  return (
    <Container>
      <StatusBar 
        barStyle="light-content"
        translucent
        backgroundColor='transparent'
      />
      <Header>
        <BackButtonArea>
          <BackButton light onPress={() => navigation.goBack()} />
        </BackButtonArea>

        <Title>
          Escolha uma {`\n`}
          data de início e {`\n`}
          fim do aluguel {`\n`}
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue value={!!rentalPeriod.start}>{rentalPeriod.start}</DateValue>
          </DateInfo>

        <ArrowSvg />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue value={!!rentalPeriod.end}>{rentalPeriod.end}</DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>
      
      <Content 
        contentContainerStyle={{paddingBottom: 24}}
        showsVerticalScrollIndicator={false}
      >
        <Calendar 
          markedDates={markedDates}
          onDayPress={handleChangeDate}
        />
      </Content>

      <Footer>
        <Button title="Confirmar" onPress={handleConfirmRental} />
      </Footer>
    </Container>
  )
}