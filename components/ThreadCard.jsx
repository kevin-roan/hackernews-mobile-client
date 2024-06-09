import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ThreadCard = ({
  title,
  type,
  url,
  author,
  time,
  noOfcomments,
  score,
}) => {
  // console.log("url of the thead", url);
  // unix time to ist, and time diff in hours
  let date = new Date(time * 1000);
  let current_date = new Date();
  let diffInMilliseconds = current_date - date;
  let diffInHours = diffInMilliseconds / (1000 * 60 * 60);
  let timeDiff = diffInHours.toFixed();

  // if time diff is > 24 then convert to days
  let timeDifferenceText;

  if (timeDiff > 24) {
    let daysDiff = (timeDiff / 24).toFixed();
    timeDifferenceText = `${daysDiff} Days ago`;
  } else if (timeDiff == 0) {
    timeDifferenceText = `Just Now`;
  } else {
    timeDifferenceText = `${timeDiff} hours ago`;
  }

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ViewThread", { url: url })}
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
      <View className="flex-row gap-4">
        <Text
          className={`${score > 200 ? "text-[#FF5733] font-bold" : "text-white"}`}
        >
          {score}
        </Text>
        <Text className="text-[#DADADA]">
          Points by {author} {timeDifferenceText}
        </Text>
      </View>
      <View className="flex-row my-1">
        <View className="bg-[#FFC700] w-[10%] rounded-3xl items-center">
          <Text className="text-black self-center">{type}</Text>
        </View>
        <Text className="text-[#dadada] px-4">
          | {"  "} {noOfcomments} Comments
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ThreadCard;
