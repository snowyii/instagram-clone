import React from "react";
import { ScrollView, View, Text, StyleSheet, FlatList } from "react-native";
import SearchBar from "../components/SearchBar";
import DmHeader from "../components/DmHeader";
import Chat from "../components/Chat";
import { DATA } from "../mockdata/MOCK";

const Dm = () => {
  return (
    <View style={styles.conatiner}>
      <DmHeader />
      <SearchBar />

      <FlatList
        data={DATA}
        keyExtractor={(item) => item.storyId}
        renderItem={({ item, index }) => {
          return <Chat username={item.name} profileUrl={item.profilePic} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    backgroundColor: "black",
    flex: 1,
  },
});
export default Dm;
