import React, { memo } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, StyleSheet, TextInput, Text } from "react-native";
import axios from "axios";
const ChatTextInput = ({ callback }) => {
  const [word, setWord] = React.useState("");

  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <FontAwesome name="camera" size={20} color="white" />
      </View>
      <TextInput
        value={word}
        onChangeText={setWord}
        autoCapitalize="none"
        autoCorrect={false}
        style={{
          flex: 1,
          height: "50%",
          marginHorizontal: 10,
          color: "white",
        }}
        placeholder="ส่งข้อความ..."
        placeholderTextColor="grey"
        onSubmitEditing={() => {
          callback(word, 2);
          setWord("");
        }}
        blurOnSubmit={false}
      />
      <Feather name="mic" size={20} color="white" style={{ marginRight: 15 }} />
      <SimpleLineIcons
        name="picture"
        size={22}
        color="white"
        style={{ transform: [{ scaleX: -1 }], marginRight: 15 }}
      />

      <MaterialCommunityIcons
        name="sticker-emoji"
        size={24}
        color="white"
        style={{ marginRight: 20 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 42,
    backgroundColor: "rgba(255,255,255,0.15)",
    borderRadius: 20,
    margin: 10,
    alignItems: "center",
    flexDirection: "row",
  },
  circle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#0993f3",
    marginLeft: 4,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default memo(ChatTextInput);
