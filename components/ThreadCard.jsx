import React from "react";
import { View, Text } from "react-native";

const ThreadCard = ({ title, type, url, author }) => {
  // console.log("url of the thead", url);
  return (
    <View
      className="bg-[#1E1E1E]"
      style={{
        borderRadius: 12,
        padding: 14,
        paddingHorizontal: 20,
        marginVertical: 4,
        justifyContent: "center",
        gap: 5,
      }}
    >
      <Text
        className="text-white text-xl"
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {title}
      </Text>
      <Text className="text-[#DADADA]">40 Points by {author} 16 hours ago</Text>
      <View className="flex-row my-1">
        <View className="bg-[#FFC700] w-[10%] rounded-3xl items-center">
          <Text className="text-black text-center">{type}</Text>
        </View>
        <Text className="text-[#dadada] px-4">| {"  "} 77 Comments</Text>
      </View>
    </View>
  );
};

export default ThreadCard;
