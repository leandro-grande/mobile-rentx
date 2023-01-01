import { SvgProps } from "react-native-svg";
import { Container, Title } from "./styles";

type AccessoryProps = {
  icon: React.FC<SvgProps>
  title: string;
}

export const Accessory = ({icon: Icon, title}: AccessoryProps) => {
  return (
    <Container>
      <Icon height={32} width={32} />
      <Title>{title}</Title>
    </Container>
  );
}