import React from "react";
import { View, StyleSheet, Text } from "react-native";

const ChatBlock = ({ chat, type }) => {
  return (
    <View
      style={[
        styles.container,
        { alignSelf: type == 1 ? "flex-start" : "flex-end" },
      ]}
    >
      <Text style={styles.text}>{chat}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 40,
    backgroundColor: "#0993f3",
    maxWidth: 200,
    borderRadius: 20,
    flexWrap: "wrap",
    alignSelf: "flex-end",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginTop: 5,
  },
  text: {
    color: "white",
  },
});

export default ChatBlock;
