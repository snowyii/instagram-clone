import React, { memo, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { SvgHeart } from "../components/SvgComponent";
import {
  AntDesign,
  MaterialCommunityIcons,
  Ionicons,
  Feather,
} from "@expo/vector-icons";

const ReactionBar = ({ callback, isLiked, setIsLiked }) => {
  const handleLike = () => {
    if (isLiked) {
      setIsLiked(false);
      callback(false);
    } else {
      setIsLiked(true);
      callback(true);
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ marginLeft: 10 }} onPress={handleLike}>
        {isLiked ? (
          <AntDesign name="heart" size={22} color="rgb(255, 73, 84)" />
        ) : (
          <AntDesign name="hearto" size={22} color="white" />
        )}
      </TouchableOpacity>
      <Ionicons
        name="md-chatbubble-outline"
        size={24}
        color="white"
        style={{ transform: [{ scaleX: -1 }], marginLeft: 13 }}
      />
      <Feather
        name="send"
        size={24}
        color="white"
        style={{ transform: [{ rotate: "17deg" }], marginLeft: 13 }}
      />
      <Feather
        name="bookmark"
        size={24}
        color="white"
        style={{ position: "absolute", right: 10 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,

    flexDirection: "row",
    alignItems: "center",
  },
});
export default memo(ReactionBar);
