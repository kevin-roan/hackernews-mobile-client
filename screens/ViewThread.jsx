import React from "react";
import { WebView } from "react-native-webview";
import { View, Text, StatusBar } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

function ViewThread() {
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
        "hsl(0, 100%, 50%)",
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
        Hacker news
        <Text className="text-[#ffc700]">!</Text>
      </Text>
      <View className="flex-1 border-[0.5px] rounded-[12px] border-gray my-4 p-1 bg-white">
        <WebView
          source={{
            uri: "https://blog.archive.org/2024/06/01/the-backrooms-of-the-internet-archive/",
          }}
        />
      </View>
    </LinearGradient>
  );
}

export default ViewThread;
