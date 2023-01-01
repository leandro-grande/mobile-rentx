import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";


export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.color.header};
`;

export const Content = styled.View`

  align-items: center;
`;

export const Title = styled.Text`
  margin-top: 40px;
  font-size: ${RFValue(30)}px;

  ${({theme}) => css`
    color: ${theme.color.background_secondary};
    font-family: ${theme.font.secondary_500};
  `}
`;

export const Description = styled.Text`
  margin-top: 16px;
  text-align: center;
  font-size: ${RFValue(15)}px;
  line-height: 25px;

  ${({theme}) => css`
    color: ${theme.color.text_detail};
    font-family: ${theme.font.primary_400};
  `}
`;

export const Button = styled(RectButton)`
  margin-top: 80px;
  padding: 18px 24px;
  background-color: ${({theme}) => theme.color.shape_dard}
`;

export const ButtonText = styled.Text`
  font-size: ${RFValue(15)}px;

  ${({theme}) => css`
    color: ${theme.color.background_secondary};
    font-family: ${theme.font.primary_500};
  `}
`;