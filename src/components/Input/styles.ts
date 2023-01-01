import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

type ContainerProps = {
  isFocused: boolean;
}

export const Container = styled.View<ContainerProps>`
  margin-bottom: 8px;
  width: 100%;
  height: 56px;
  background-color: ${({theme}) => theme.color.background_secondary};
  border-bottom-width: 2px;
  border-bottom-color: ${({theme, isFocused}) => isFocused ? theme.color.main : theme.color.background_secondary};

  flex-direction: row;
`;

export const IconContainer = styled.View`
  height: 56px;
  width: 56px;
  align-items: center;
  justify-content: center;

  border-right-width: 2px;
  border-right-color: ${({theme}) => theme.color.background_primary};
`;

export const InputText = styled.TextInput`
  flex: 1;
  padding: 0 24px;
  font-size: ${RFValue(15)}px;

  ${({theme}) => css`
    color: ${theme.color.title};
    font-family: ${theme.font.primary_400};
  `}
`;