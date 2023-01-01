import { Dimensions } from "react-native";
import { GestureDetector, Gesture, Directions } from "react-native-gesture-handler"
import { useSharedValue, useAnimatedStyle, withTiming } from "react-native-reanimated";

import { Box, Container } from "./styles"

const START = 24;
const LIMIT = Dimensions.get('screen').width - 124;

export const Animation = () => {
  const positionX = useSharedValue(0);

  const directionRight = Gesture
  .Fling()
  .direction(Directions.RIGHT)
  .onStart(() => {
    positionX.value = withTiming(LIMIT, { duration: 500 })
  })

  const directionLeft = Gesture
  .Fling()
  .direction(Directions.LEFT)
  .onStart(() => {
    positionX.value = withTiming(START, { duration: 500 })
  })

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{translateX: positionX.value}]
  }))

  return (
    <Container>
      <GestureDetector gesture={Gesture.Exclusive(directionRight, directionLeft)}>
        <Box style={animatedStyle} />
      </GestureDetector>
    </Container>
  )
}