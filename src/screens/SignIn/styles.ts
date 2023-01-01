import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";


export const Container = styled.View`
  padding: 0 24px;
  background-color: ${({theme}) => theme.color.background_primary};
`;

export const Header = styled.View`
  margin-top: ${getStatusBarHeight() + 115}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(40)}px;

  ${({theme}) => css`
    color: ${theme.color.title};
    font-family: ${theme.font.secondary_500}
  `}

`;

export const SubTitle = styled.Text`
  margin-top: 16px;
  font-size: ${RFValue(15)}px;
  line-height: 25px;

  ${({theme}) => css`
    color: ${theme.color.text_detail};
    font-family: ${theme.font.primary_400}
  `}
`;

export const Form = styled.View`
  margin: 64px 0 64px;
`;