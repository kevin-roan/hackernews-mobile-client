import React from "react";
import { View, Text } from "react-native";

const Home = () => {
  return (
    <View className="flex-1 bg-[#222222] p-10">
      <Text
        className="text-white text-2xl"
        style={{ fontFamily: "Inter-Black", fontSize: 50 }}
      >
        Hacker news!
      </Text>
    </View>
  );
};

export default Home;
