import { RFPercentage } from "react-native-responsive-fontsize";
import styled from "styled-components/native";


export const Container = styled.View`
  width: 32%;
  height: 92px;

  padding: 16px;
  margin-bottom: 8px;

  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.color.background_primary}
`;

export const Title = styled.Text`
  margin-top: 12px;
`;