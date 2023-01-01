import { FlatList } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";
import { Car as ModelCar } from "../../database/model/Car";

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.color.background_primary};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(113)}px;
  background-color: ${({theme}) => theme.color.header};

  justify-content: flex-end;
  padding: 32px 24px;
`;

export const HeaderContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TotalCars = styled.Text`
  font-size: ${RFValue(15)}px;

  ${({theme}) => css`
    color: ${theme.color.title};
    font-family: ${theme.font.primary_400};
  `}
`;

export const CarList = styled(FlatList<ModelCar>)``;