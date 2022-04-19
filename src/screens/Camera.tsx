import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Context as DataContext } from "../context/DataContext";
const Camera = ({ navigation }) => {
  const { state } = React.useContext(DataContext);
  console.log(state.chat);
  return (
    <View
      style={{
        backgroundColor: "black",
        flex: 1,
      }}
    >
      <Text style={{ color: "white" }}>Camera SCREEN</Text>
    </View>
  );
};

export default Camera;
