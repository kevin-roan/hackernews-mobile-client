import React from "react";
import { View, Text } from "react-native";

const ThreadCard = () => {
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
        The Backrooms of the Internet Archive (Archiv..
      </Text>
      <Text className="text-[#DADADA]">40 Points by padding 16 hours ago</Text>
      <View className="flex-row my-1">
        <View className="bg-[#FFC700] w-[10%] rounded-3xl items-center">
          <Text className="text-black text-center">Hide</Text>
        </View>
        <Text className="text-[#dadada] px-4">| {"  "} 77 Comments</Text>
      </View>
    </View>
  );
};

export default ThreadCard;
