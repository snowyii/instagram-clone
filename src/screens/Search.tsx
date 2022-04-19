import React from "react";
import SearchBar from "../components/SearchBar";
import {
  Dimensions,
  FlatList,
  ScrollView,
  Text,
  Image,
  View,
  Animated,
  RefreshControl,
} from "react-native";

import { DATA, POST } from "../mockdata/MOCK";
import BlockGallery from "../components/BlockGallery";
const { width, height } = Dimensions.get("screen");
const Search = () => {
  let newData = [];
  for (let i = 0; i < Math.floor(POST.length / 6); i++) {
    newData.push({ ...POST.slice(i * 6, i * 6 + 6), listID: i });
  }

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 5000);
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <Animated.View
        style={{
          zIndex: 1,
        }}
      >
        <SearchBar />
      </Animated.View>
      <FlatList
        data={newData}
        keyExtractor={(item) => item.listID}
        renderItem={({ item, index }) => (
          <BlockGallery pictureList={item} typeRender={index % 4} />
        )}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor="white"
          />
        }
      />
    </View>
  );
};

export default Search;
