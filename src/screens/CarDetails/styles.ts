import Animated from "react-native-reanimated";
import { getBottomSpace, getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";


export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.color.background_secondary}
`;

export const AnimatedHeader = styled(Animated.View)`
  position: absolute;
  z-index: 1;
  overflow: hidden;
  background-color: ${({theme}) => theme.color.background_secondary}
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
  position: absolute;
  margin-top: ${getStatusBarHeight() + 32}px;
  margin-left: 24px;
`;

export const Content = styled.View``;

export const CarImages = styled(Animated.View)`
  top: ${getStatusBarHeight() + 32}px;;
`;

export const ScrollContent = styled(Animated.ScrollView)`
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

export const About = styled.Text`
  margin-top: 24px; 
  font-size: ${RFValue(15)}px;
  text-align: justify;
  line-height: 25px;

  ${({theme}) => css`
    color: ${theme.color.text};
    font-family: ${theme.font.primary_400};
  `}
`;

export const Footer = styled.View`
  padding: 24px 24px ${getBottomSpace() + 24}px;
`;

export const Offline = styled.Text`
  font-size: ${RFValue(10)}px;
  text-align: center;
  padding: 0 16px;

  ${({theme}) => css`
    color: ${theme.color.main};
    font-family: ${theme.font.primary_400};
  `}
`;