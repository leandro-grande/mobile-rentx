import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Splash } from "../screens/Splash";
import { Confirmation } from "../screens/Confirmation";
import { SignIn } from "../screens/SignIn";
import { SignUpFirstStep } from "../screens/SignUp/SignUpFirstStep";
import { SignUpSecondStep } from "../screens/SignUp/SignUpSecondStep";

const { Navigator, Screen } = createNativeStackNavigator();

export const PublicRoutes = () => {
  return (
    <Navigator initialRouteName="splash" screenOptions={{ headerShown: false }}>
      <Screen name="splash" component={Splash} />
      <Screen name="signIn" component={SignIn} />
      <Screen name="signUpFirstStep" component={SignUpFirstStep} />
      <Screen name="signUpSecondStep" component={SignUpSecondStep} />
      <Screen name="confirmation" component={Confirmation} />
    </Navigator>
  )
}