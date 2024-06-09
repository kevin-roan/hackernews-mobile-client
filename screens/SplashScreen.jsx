import { StatusBar } from "expo-status-bar";
import { View, ActivityIndicator, Text } from "react-native";

const SplashScreenView = () => {
  return (
    <View className="flex-1 bg-[#222222] pt-10 justify-center">
      <StatusBar style="light" />
      <View className="items-center">
        <Text
          className="text-white "
          style={{ fontFamily: "Inter-Black", fontSize: 50 }}
        >
          Hacker News!
          <Text className="text-[#FFC700]">!</Text>
        </Text>
        <Text className="text-white">Crafted by ~r/kevinroan</Text>
      </View>
      <ActivityIndicator
        size="large"
        color="orange"
        style={{ paddingVertical: 30 }}
      />
    </View>
  );
};

export default SplashScreenView;
