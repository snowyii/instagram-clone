import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import SvgComponent, { SvgHeart, SvgMessenger, SvgAdd } from "./SvgComponent";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const HomeHeader = ({ children = null }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <SvgComponent />
      <AntDesign
        name="hearto"
        size={20}
        color="white"
        style={{ position: "absolute", right: 62 }}
      />
      <TouchableOpacity
        style={{ position: "absolute", right: 18 }}
        onPress={() => navigation.navigate("dm" as never)}
      >
        <SvgMessenger />
      </TouchableOpacity>

      <SvgAdd style={{ position: "absolute", right: 106 }} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: "black",
    paddingLeft: 10,
    flexDirection: "row",
    alignItems: "center",
  },
});
export default HomeHeader;
