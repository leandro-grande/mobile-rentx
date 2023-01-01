import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";


export const Container = styled.View`
  padding: 0 24px;
  background-color: ${({theme}) => theme.color.background_primary};
`;

export const Header = styled.View`
  margin-top: ${getStatusBarHeight() + 32}px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Steps = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const Content = styled.View`
  margin-top: 60px;
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

export const FormTitle = styled.Text`
  margin-top: 64px;
  font-size: ${RFValue(20)}px;

  ${({theme}) => css`
    color: ${theme.color.title};
    font-family: ${theme.font.secondary_500}
  `}
`;

export const Form = styled.View`
  margin: 24px 0 24px;
`;