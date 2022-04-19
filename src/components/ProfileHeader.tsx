import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { StackActions, useNavigation } from "@react-navigation/native";

const ProfileHeader = ({ username }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.dispatch(StackActions.pop());
        }}
      >
        <AntDesign
          name="arrowleft"
          size={24}
          color="white"
          style={{ marginLeft: 10 }}
        />
      </TouchableOpacity>

      <Text
        style={{
          color: "white",
          marginLeft: 20,
          fontWeight: "bold",
          fontSize: 18,
        }}
      >
        {username}
      </Text>
      <MaterialIcons
        name="verified"
        size={16}
        color="#187bcd"
        style={{ marginLeft: 10 }}
      />
      <AntDesign
        name="bells"
        size={24}
        color="white"
        style={{ position: "absolute", right: 50 }}
      />
      <Ionicons
        name="ellipsis-vertical"
        size={24}
        color="white"
        style={{ position: "absolute", right: 10 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 45,
    backgroundColor: "black",
    alignItems: "center",
    flexDirection: "row",
    borderBottomColor: "grey",
    borderBottomWidth: 0.1,
  },
});
export default ProfileHeader;
