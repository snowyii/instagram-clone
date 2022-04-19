import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { StackActions, useNavigation } from "@react-navigation/native";
const ChatHeader = ({ username, profilePic }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.dispatch(StackActions.pop())}>
        <AntDesign
          name="arrowleft"
          size={24}
          color="white"
          style={{ marginLeft: 10 }}
        />
      </TouchableOpacity>

      <Image source={{ uri: profilePic }} style={styles.pic} />
      <View style={{ marginLeft: 19, flex: 1 }}>
        <Text style={styles.textBig}>{username}</Text>
        <Text style={styles.textSmall} numberOfLines={1}>
          {username}
        </Text>
      </View>
      <AntDesign
        name="phone"
        size={24}
        color="white"
        style={{ transform: [{ scaleX: -1 }], marginRight: 20 }}
      />
      <AntDesign
        name="videocamera"
        size={24}
        color="white"
        style={{ marginRight: 20 }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 45,

    alignItems: "center",
    flexDirection: "row",
  },
  pic: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginLeft: 25,
  },
  textBig: {
    color: "white",
  },
  textSmall: {
    color: "grey",
    marginRight: 60,
    fontSize: 12,
  },
});

export default ChatHeader;
