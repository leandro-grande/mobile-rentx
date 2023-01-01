import { RFValue } from "react-native-responsive-fontsize"
import { RectButtonProps } from "react-native-gesture-handler";

import { About, Brand, CarDetails, CarImage, Container, Name, Period, Price, Rent, Type } from "./styles"

import { Car } from "../../database/model/Car";

import { getAccessoryIcon } from "../../utils/getAccessoryIcon";
import { useNetInfo } from "@react-native-community/netinfo";


type CardCarProps = RectButtonProps & {
  data: Car;
}

export const CardCar = ({ data, ...rest }: CardCarProps) => {
  const MotorType = getAccessoryIcon(data.fuel_type);

  const netInfo = useNetInfo();
  const isOnline = netInfo.isConnected === true;

  return (
    <Container {...rest}>
      <CarDetails>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>

        <About>
          <Rent>
            <Period>{data.period}</Period>
            <Price>R$ {isOnline ? data.price : '---'} </Price>
          </Rent>

          <Type>
            <MotorType height={RFValue(22)} width={RFValue(21) } />
          </Type>
        </About>
      </CarDetails>

        <CarImage 
          source={{ uri: data.thumbnail }} 
          resizeMode='contain'  
        />


    </Container>
  )
}