import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";


export const Container = styled.View`
  background-color: ${({theme}) => theme.color.background_primary};
`;

export const Header = styled.View`
  height: ${RFValue(228)}px;
  width: 100%;

  padding: 0 24px;
  align-items: center;
  background-color: ${({theme}) => theme.color.header};
`;

export const HeaderTop = styled.View`
  margin-top: ${getStatusBarHeight() + 32}px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderTitle = styled.Text`
  font-size: ${RFValue(25)}px;

  ${({theme}) => css`
    color: ${theme.color.background_secondary};
    font-family: ${theme.font.secondary_500};
  `}
`;

export const LogoutButton = styled(BorderlessButton)``;

export const PhotoContainer = styled.View`
  height: 180px;
  width: 180px;
  border-radius: 90px;
  background-color: ${({theme}) => theme.color.shape};

  margin-top: 50px;
`;

export const Photo = styled.Image`
  height: 180px;
  width: 180px;
  border-radius: 90px;
`;

export const PhotoButton = styled(RectButton)`
  position: absolute;
  bottom: 10px;
  right: 10px;

  padding: 8px;
  background-color: ${({theme}) => theme.color.main};
  align-items: center;
  justify-content: center;
`;

export const Content = styled.View`
  padding: 0 24px;
  margin-top: 122px;
`;

export const Options = styled.View`
  flex-direction: row;
  justify-content: space-around;

  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.color.line};
`;

export const Option = styled.TouchableOpacity<{active: boolean}>`
  padding-bottom: 14px;

  ${({theme, active}) => active && css`
    border-bottom-width: 2px;
    border-bottom-color: ${({theme}) => theme.color.main};

  `}
`;

export const OptionTitle = styled.Text<{active: boolean}>`
  font-size: ${RFValue(20)}px;

  ${({theme, active}) => css`
    font-family: ${active ? theme.font.secondary_600 : theme.font.secondary_500};
    color: ${active ? theme.color.title : theme.color.text_detail};
  `}
`;

export const Section = styled.View`
  margin-top: 24px;
`;

export const ButtonArea = styled.View`
  margin-top: 16px;
`;