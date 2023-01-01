import { useWindowDimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Button, ButtonText, Container, Content, Description, Title } from "./styles"

import BackgroundLogo from "../../assets/logo_background_gray.svg";
import DoneSvg from "../../assets/done.svg";

export const SchedulingComplete = () => {
  const navigation = useNavigation();
  const { width } = useWindowDimensions();

  return (
    <Container>
      <BackgroundLogo width={width} />

      <Content>
        <DoneSvg width={80} height={80} />

        <Title>Carro alugado!</Title>
        <Description>
          Agora você só precisa ir {'\n'}
          até a concessionária da RENTX {'\n'}
          pegar o seu automóvel. {'\n'}
        </Description>

        <Button onPress={() => navigation.navigate("home")}>
          <ButtonText>OK</ButtonText>
        </Button>
      </Content>

    </Container>
  )
}