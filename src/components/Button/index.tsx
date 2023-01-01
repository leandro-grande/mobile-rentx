import { RectButtonProps } from "react-native-gesture-handler";
import { Container, Title } from "./styles";

interface ButtonProps extends RectButtonProps {
  title: string;
  green?: boolean;
  ghost?: boolean
}

export const Button = ({ title, green, ghost, enabled = true, ...rest}: ButtonProps) => {
  return (
    <Container 
      green={green} 
      ghost={ghost}
      enabled={enabled} 
      {...rest}
    >
      <Title ghost={ghost}>{title}</Title>
    </Container>
  )
}