import React from "react";
import { View, Text, Image } from "react-native";
import { BlurView } from "expo-blur";

const NavBar = () => {
  return (
    <BlurView
      intensity={15}
      tint="dark"
      style={{
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 50,
        width: "50%",
        alignSelf: "flex-end",
        position: "absolute",
        bottom: 30,
        right: 10,
        paddingHorizontal: 5,
        backgroundColor: "rgba(102, 102, 102, 0.29)",
      }}
    >
      <View className="flex-row justify-between items-center">
        <View className="bg-white p-4 rounded-full">
          <Image source={require("../assets/navicons/home.png")} />
        </View>

        <View className="bg-transparent p-4 rounded-full">
          <Image source={require("../assets/navicons/search.png")} />
        </View>

        <View className="bg-transparent p-4 rounded-full">
          <Image source={require("../assets/navicons/save.png")} />
        </View>
      </View>
    </BlurView>
  );
};

export default NavBar;
