import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import FastImage from "react-native-fast-image";

import styled, { css } from "styled-components/native";


export const Container = styled(RectButton)`
  width: 100%;

  padding: 24px;
  margin-bottom: 16px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({theme}) => theme.color.background_secondary};
`;

export const CarDetails = styled.View``;

export const Brand = styled.Text`
  text-transform: uppercase;
  font-size: ${RFValue(10)}px;

  ${({theme}) => css`
    color: ${theme.color.text_detail};
    font-family: ${theme.font.secondary_500};
  `}
`;

export const Name = styled.Text`
    font-size: ${RFValue(15)}px;

  ${({theme}) => css`
    color: ${theme.color.title};
    font-family: ${theme.font.secondary_500};
  `}
`;

export const About = styled.View`
  margin-top: 16px;
  flex-direction: row;

  align-items: center;
`;

export const Rent = styled.View`
  margin-right: 24px;
`;

export const Period = styled.Text`
  text-transform: uppercase;
  font-size: ${RFValue(10)}px;

  ${({theme}) => css`
    color: ${theme.color.text_detail};
    font-family: ${theme.font.secondary_500};
  `}
`;

export const Price = styled.Text`
  font-size: ${RFValue(15)}px;

  ${({theme}) => css`
    color: ${theme.color.main};
    font-family: ${theme.font.secondary_500};
  `}
`;

export const Type = styled.View``;

export const CarImage = styled(FastImage)`
  height: 92px;
  width: 160px;
  background-color: 'transparent'
  `;

