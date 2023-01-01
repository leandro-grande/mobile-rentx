import LottieView from "lottie-react-native";
import animationCar from '../../assets/loadCar.json';

import { Container } from "./styles";

export const LoadAnimation = () => {
  
  return (
    <Container>
      <LottieView
        source={animationCar}
        autoPlay
        style={{ height: 200 }}
        resizeMode="contain"
        loop
      />
    </Container>
  )
}