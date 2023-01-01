import { MaterialIcons } from "@expo/vector-icons";
import { BorderlessButtonProps } from "react-native-gesture-handler";
import { useTheme } from "styled-components";
import { Container } from "./styles"

type BackButtonProps = BorderlessButtonProps & {
  light?: boolean;
}

export const BackButton = ({ light, ...rest }: BackButtonProps) => {
  const theme = useTheme();

  return (
    <Container {...rest}>
      <MaterialIcons 
        name="chevron-left"
        size={32}
        color={light ? theme.color.background_secondary : theme.color.text }
      />
    </Container>
  )
}