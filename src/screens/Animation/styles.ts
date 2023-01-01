import styled from "styled-components/native";
import Animated from "react-native-reanimated";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Box = styled(Animated.View)`
  width: 100px; 
  height: 100px;
  background-color: red;
  border-radius: 10px;
`;