import { View, Text } from "react-native";
import SplashScreenView from "./screens/SplashScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import Home from "./screens/Home";
import { useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import ViewThread from "./screens/ViewThread";

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [isLoading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 100);

  const [fontsLoaded, fontError] = useFonts({
    "Inter-Black": require("./assets/fonts/LeagueGothic-Regular-VariableFont_wdth.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  // {isLoading ? <SplashScreenView /> : <Home />}
  const Stack = createNativeStackNavigator();
  return (
    <View className="flex-1" onLayout={onLayoutRootView}>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ViewThread"
            component={ViewThread}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};
export default App;

// todo,
// save usefull threads to persistence
// increase threads limit
