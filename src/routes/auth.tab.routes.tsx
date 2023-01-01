import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "styled-components/native";

import HomeSvg from "../assets/home.svg";
import ProfileSvg from "../assets/people.svg";

import { StackRoutes } from "./auth.stack.routes";
import { Platform } from "react-native";
import { Profile } from "../screens/Profile";


const { Navigator, Screen } = createBottomTabNavigator();

export const TabRoutes = () => {
  const theme = useTheme();

  return (
    <Navigator screenOptions={{ 
      headerShown: false,
      tabBarActiveTintColor: theme.color.main,
      tabBarInactiveTintColor: theme.color.text_detail,
      tabBarShowLabel: false,
      tabBarStyle: {
        paddingVertical: Platform.OS === 'ios' ? 20 : 0,
        height: 78,
        backgroundColor: theme.color.background_secondary
      }
    }}>
      <Screen 
        name="stack" 
        component={StackRoutes}
        options={{
          tabBarIcon: ({ color }) => (
            <HomeSvg width={24} height={24} fill={color} />
          )
        }}  
      />
      <Screen 
        name="profile" 
        component={Profile} 
        options={{
          tabBarIcon: ({ color }) => (
            <ProfileSvg width={24} height={24} fill={color} />
          )
        }}  
      />
    </Navigator>
  )
}