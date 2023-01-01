import styled from "styled-components/native";

type Props = {
  active: boolean;
}

export const Container = styled.View<Props>`
  height: 6px;
  width: 6px;
  border-radius: 3px;
  margin-left: 8px;
  background-color: ${({theme, active}) => active ? theme.color.title : theme.color.shape};
`;