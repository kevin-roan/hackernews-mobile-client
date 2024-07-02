import React from "react";
import { WebView } from "react-native-webview";
import { View, Text, StatusBar } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

function ViewThread({ route }) {
  const { url } = route.params;
  return (
    <LinearGradient
      colors={[
        "hsla(0, 0%, 13%, 1)",
        "hsla(0, 0%, 13%, 1)",
        "hsla(0, 0%, 13%, 1)",
        "hsla(0, 0%, 13%, 1)",
        "hsla(0, 0%, 13%, 1)",
        "hsla(0, 0%, 13%, 1)",
        "hsla(0, 0%, 13%, 1)",
        "hsla(0, 0%, 13%, 1)",
        "hsl(40, 0%, 30%)",
      ]}
      start={{ x: 0, y: 1 }}
      end={{ x: 0, y: 0 }}
      style={{
        height: 100,
        flex: 1,
        paddingTop: 25,
        paddingHorizontal: 10,
      }}
    >
      <StatusBar style="light" translucent />
      <Text
        className="text-white "
        style={{ fontFamily: "Inter-Black", fontSize: 35, paddingTop: 10 }}
      >
        Thead
        <Text className="text-[#ffc700]">!</Text>
      </Text>
      <View className="flex-1 border-[0.5px] rounded-[12px] border-gray my-4 p-1 bg-white">
        <WebView
          source={{
            uri: url,
          }}
        />
      </View>
    </LinearGradient>
  );
}

export default ViewThread;
