import "react-native-gesture-handler";
import { ThemeProvider } from "styled-components";
import{ Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter"
import{ Archivo_400Regular, Archivo_500Medium, Archivo_600SemiBold, useFonts } from "@expo-google-fonts/archivo";
import * as SplashScreen from 'expo-splash-screen';

import theme from "./src/theme"

import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Routes } from "./src/routes";
import { AuthContextProvider } from "./src/hooks/useAuth";

SplashScreen.preventAutoHideAsync();

 export const App = () => {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold
  })

  if (fontsLoaded) {
    console.log('fontes carregadas');
    SplashScreen.hideAsync();
  }

  return (
    <ThemeProvider theme={theme}>
      <GestureHandlerRootView style={{flex: 1}}>
        <AuthContextProvider>
          <Routes />
        </AuthContextProvider>
      </GestureHandlerRootView>
    </ThemeProvider>
  )
}
