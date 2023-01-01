import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { CarDetails } from "../screens/CarDetails";
import { Home } from "../screens/Home";
import { Scheduling } from "../screens/Scheduling";
import { Confirmation } from "../screens/Confirmation";
import { SchedulingDetails } from "../screens/SchedulingDetails";

const { Navigator, Screen } = createNativeStackNavigator();

export const StackRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="carDetails" component={CarDetails} />
      <Screen name="scheduling" component={Scheduling} />
      <Screen name="schedulingDetails" component={SchedulingDetails} />
      <Screen name="confirmation" component={Confirmation} />
    </Navigator>
  )
}