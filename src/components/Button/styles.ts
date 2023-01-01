import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

type ButtonProps = {
  green: boolean;
  ghost: boolean;
  enabled: boolean
}

export const Container = styled(RectButton)<ButtonProps>`
  margin-bottom: 8px;
  width: 100%;
  height: 56px;
  align-items: center;
  justify-content: center;
  background-color: ${({theme, green}) => !green ? theme.color.main : theme.color.success};
  opacity: ${({enabled}) => !enabled ? '0.5' : '1'};

  ${({theme, ghost}) => ghost && css`
    background-color: ${theme.color.background_secondary};  
  `}

`;

export const Title = styled.Text<{ ghost: boolean}>`
  font-size: ${RFValue(15)}px;

  ${({theme, ghost}) => css`
    color: ${ghost ? theme.color.title  : theme.color.background_secondary};
    font-family: ${theme.font.primary_500};
  `}

`;