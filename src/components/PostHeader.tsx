import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StackActions } from "@react-navigation/native";

const PostHeader = ({ username, profilePic }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: profilePic,
        }}
        style={styles.pic}
      />
      <TouchableOpacity
        onPress={() =>
          navigation.dispatch(
            StackActions.push(
              "profile" as never,
              { username: username } as never
            )
          )
        }
      >
        <Text style={styles.text}>{username}</Text>
      </TouchableOpacity>
      <Feather
        name="more-vertical"
        size={20}
        color="white"
        style={{ position: "absolute", right: 10 }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 48,
    backgroundColor: "black",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
  },
  pic: {
    width: 35,
    height: 35,
    borderRadius: 20,
  },
  text: {
    fontSize: 14,
    fontWeight: "500",
    color: "white",
    marginLeft: 10,
  },
});
export default PostHeader;
