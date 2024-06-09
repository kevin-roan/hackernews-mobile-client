import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import WebviewCard from "../components/WebviewCard";
import NavBar from "../components/NavBar";
import ThreadCard from "../components/ThreadCard";
import axios from "axios";
import React, { useEffect, useState } from "react";
import SplashScreenView from "./SplashScreen";

const Home = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  const getTopStories = async () => {
    try {
      const response = await axios.get(
        "https://hacker-news.firebaseio.com/v0/topstories.json",
      );
      const storyIds = response.data.slice(0, 10);
      const storyPromises = storyIds.map(async (id) => {
        const storyResponse = await axios.get(
          `https://hacker-news.firebaseio.com/v0/item/${id}.json`,
        );
        return storyResponse.data;
      });
      const stories = await Promise.all(storyPromises);
      setStories(stories);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching top stories:", error);
    }
  };

  useEffect(() => {
    getTopStories();
  }, []);

  if (loading) {
    return <SplashScreenView />;
  }
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
        {stories.map((item) => {
          // this also provides actual description, for now its useless
          // console.log(item.text);
          return (
            <ThreadCard
              key={item.id}
              title={item.title}
              type={item.type}
              url={item.url}
              author={item.by}
              time={item.time}
              score={item.score}
              noOfcomments={item.kids.length}
            />
          );
        })}
      </ScrollView>
      <NavBar />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#222222",
  },
});
export default Home;
