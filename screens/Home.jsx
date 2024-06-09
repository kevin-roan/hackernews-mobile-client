import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import WebviewCard from "../components/WebviewCard";
import NavBar from "../components/NavBar";
import ThreadCard from "../components/ThreadCard";

const Home = () => {
  // <View className="flex-1 bg-[#222222] py-10 px-5 ">
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
        "hsl(29, 92%, 26%)",
      ]}
      start={{ x: 0, y: 1 }}
      end={{ x: 0, y: 0 }}
      style={{
        height: 100,
        flex: 1,
        paddingVertical: 25,
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
      <ScrollView className="theadcontainer py-3">
        <ThreadCard />
        <ThreadCard />
        <ThreadCard />
        <ThreadCard />
        <ThreadCard />
        <ThreadCard />
        <ThreadCard />
        <ThreadCard />
        <ThreadCard />
        <ThreadCard />
        <ThreadCard />
        <ThreadCard />
        <ThreadCard />
        <ThreadCard />
      </ScrollView>
      <NavBar />
    </LinearGradient>
  );
};

export default Home;
