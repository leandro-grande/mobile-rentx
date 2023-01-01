import Animated, { interpolate, useAnimatedStyle, useSharedValue, withTiming, runOnJS } from "react-native-reanimated";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import { Container,  } from "./styles";

import BrandSvg from "../../assets/brand.svg";
import LogoSvg from "../../assets/logo.svg";


export const Splash = () => {
  const navigation = useNavigation();
  const splashAnimation = useSharedValue(0);

  const brandAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(splashAnimation.value, [0, 25], [0, 1]),
    transform: [{translateX: interpolate(splashAnimation.value, [0, 50], [0, -90])}]
  }));

  const logoAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(splashAnimation.value, [0, 50], [0, 1]),
    transform: [{translateX: interpolate(splashAnimation.value, [0, 50], [0, 50])}]
  }));

  const startApp = () => {
    navigation.navigate('signIn');
  }

  useEffect(() => {
    splashAnimation.value = withTiming(50, { duration: 3000 }, () => {
      'worklet';
      runOnJS(startApp)();
    })
  }, [])

  return (
    <Container>
      <Animated.View style={[brandAnimatedStyle, { position: 'absolute' }]}>
        <BrandSvg width={80} height={50}  />
      </Animated.View>

      <Animated.View style={[logoAnimatedStyle, { position: 'absolute' }]}>
        <LogoSvg width={180} height={20}  />
      </Animated.View>
    </Container>
  )
}