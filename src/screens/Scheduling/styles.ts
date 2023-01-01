import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

import styled, { css } from "styled-components/native";


export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.color.background_secondary}
`;

export const BackButtonArea = styled.View`
  align-self: flex-start;
`;

export const Header = styled.View`
  width: 100%;
  background-color: ${({theme}) => theme.color.header};
  padding: ${getStatusBarHeight() + 18}px 24px;
`;

export const Title = styled.Text`
  margin-top: 24px;
  font-size: ${RFValue(30)}px;
  line-height: 35px;

  ${({theme}) => css`
    color: ${theme.color.background_secondary};
    font-family: ${theme.font.secondary_600};
  `}
`;

export const RentalPeriod = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between; 
  align-items: center;
`;

export const DateInfo = styled.View`
  width: 30%;
`;

export const DateTitle = styled.Text`
  font-size: ${RFValue(10)}px;

  ${({theme}) => css`
      color: ${theme.color.text};
      font-family: ${theme.font.secondary_500};
    `}
`;

export const DateValue = styled.Text<{ value: boolean }>`
  font-size: ${RFValue(15)}px;
  border-bottom-width: 1px;
  border-bottom-color: ${({theme, value}) => !value ? theme.color.text : 'transparent' };
  padding-bottom: 5px;

  ${({theme}) => css`
      color: ${theme.color.background_secondary};
      font-family: ${theme.font.primary_500};
    `}
`;


export const Content = styled.ScrollView``;

export const Footer = styled.View`
  padding: 24px;
`;