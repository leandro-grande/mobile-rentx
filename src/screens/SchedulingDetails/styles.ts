
import { getBottomSpace, getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";


export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.color.background_secondary}
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  position: absolute;
  margin-top: ${getStatusBarHeight() + 18}px;
  margin-left: 24px;
`;

export const CarImages = styled.View`
  margin-top: ${getStatusBarHeight() + 32}px;
`;

export const Content = styled.ScrollView`
`;

export const Details = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Description = styled.View``;

export const Brand = styled.Text`
  font-size: ${RFValue(10)}px;

  ${({theme}) => css`
    color: ${theme.color.text_detail};
    font-family: ${theme.font.secondary_500};
  `}
`;

export const Name = styled.Text`
  font-size: ${RFValue(25)}px;

  ${({theme}) => css`
    color: ${theme.color.title};
    font-family: ${theme.font.secondary_500};
  `}
`;

export const Rent = styled.View``;

export const Period = styled.Text`
  font-size: ${RFValue(10)}px;

  ${({theme}) => css`
    color: ${theme.color.text_detail};
    font-family: ${theme.font.secondary_500};
  `}
`;

export const Price = styled.Text`
  font-size: ${RFValue(25)}px;

  ${({theme}) => css`
    color: ${theme.color.main};
    font-family: ${theme.font.secondary_500};
  `}
`;

export const Accessories = styled.View`
  width: 100%;
  margin-top: 24px;

  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;



export const Footer = styled.View`
  padding: 24px 24px ${getBottomSpace() + 24}px;
`;

export const RentPeriod = styled.View`
  width: 100%;
  margin-top: 40px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.color.background_primary};
  padding-bottom: 16px;
`;

export const CalendarIcon = styled.View`
  padding: 12px;
  align-items: center;
  justify-content: center;
  
  background-color: ${({theme}) => theme.color.main};
`;

export const DateInfo = styled.View``;

export const DateTitle = styled.Text`
  font-size: ${RFValue(10)}px;

  ${({theme}) => css`
    color: ${theme.color.text_detail};
    font-family: ${theme.font.secondary_500};
  `}
`;

export const DateValue = styled.Text`
  font-size: ${RFValue(15)}px;

  ${({theme}) => css`
    color: ${theme.color.title};
    font-family: ${theme.font.secondary_500};
  `}
`;

export const RentTotal = styled.View`
  width: 100%;
  margin-top: 16px;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`;

export const TotalResume = styled.View``;

export const TotalTitle = styled.Text`
  font-size: ${RFValue(10)}px;

  ${({theme}) => css`
    color: ${theme.color.text_detail};
    font-family: ${theme.font.secondary_500};
  `}
`;

export const TotalDays = styled.Text`
  font-size: ${RFValue(15)}px;

  ${({theme}) => css`
    color: ${theme.color.title};
    font-family: ${theme.font.primary_500};
  `}
`;

export const TotalValue = styled.Text`
  font-size: ${RFValue(24)}px;
  line-height: 30px;

  ${({theme}) => css`
    color: ${theme.color.success};
    font-family: ${theme.font.secondary_500};
  `}
`;


