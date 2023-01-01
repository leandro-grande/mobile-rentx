import { useWindowDimensions } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import { Button, ButtonText, Container, Content, Description, Title } from "./styles"

import BackgroundLogo from "../../assets/logo_background_gray.svg";
import DoneSvg from "../../assets/done.svg";

type ConfirmationRoutes = {
  title: string;
  message: string;
  nextScreenRoute: 'home' ;
}

export const Confirmation = () => {
  const navigation = useNavigation();
  const routes = useRoute();

  const { title, message, nextScreenRoute } = routes.params as ConfirmationRoutes;

  const { width } = useWindowDimensions();

  return (
    <Container>
      <BackgroundLogo width={width} />

      <Content>
        <DoneSvg width={80} height={80} />

        <Title>{title}</Title>
        <Description>{message}</Description>

        <Button onPress={() => navigation.navigate(nextScreenRoute)}>
          <ButtonText>OK</ButtonText>
        </Button>
      </Content>

    </Container>
  )
}