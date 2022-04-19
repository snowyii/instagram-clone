import React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
  Dimensions,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const SearchBar = () => {
  return (
    <View style={[styles.container, { transform: [{ translateY: 0 }] }]}>
      <View style={styles.innerBlock}>
        <AntDesign
          name="search1"
          size={20}
          color="white"
          style={{ marginLeft: 15 }}
        />
        <Text style={{ marginLeft: 10, color: "rgba(255,255,255, 0.5)" }}>
          ค้นหา
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 53,
    backgroundColor: "black",

    justifyContent: "center",
    alignItems: "stretch",
    // position: "absolute",
  },
  innerBlock: {
    flex: 1,
    marginBottom: 10,
    marginTop: 8,
    backgroundColor: "rgba(255,255,255,0.11)", //"rgba(255,255,255,0.15)"
    marginHorizontal: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default SearchBar;
