import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import HomeHeader from "../components/HomeHeader";
import StoryIg from "../components/StoryIg";
import Post from "../components/Post";
import Swipeable from "react-native-gesture-handler/Swipeable";
import {
  FlingGestureHandler,
  Directions,
  State,
} from "react-native-gesture-handler";
import { POST, DATA } from "../mockdata/MOCK";
const Home = ({ navigation }) => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 5000);
  }, []);
  return (
    <FlingGestureHandler
      direction={Directions.RIGHT}
      hitSlop={{ left: 0, width: 20 }}
      onHandlerStateChange={({ nativeEvent }) => {
        if (nativeEvent.state === State.ACTIVE) {
          navigation.navigate("camera");
        }
      }}
    >
      <View style={styles.container}>
        <HomeHeader />
        <ScrollView
          style={{ backgroundColor: "black", flex: 1 }}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              tintColor="white"
            />
          }
        >
          {/* <ActivityIndicator animating color="white" size="large" /> */}
          <StoryIg data={DATA} />
          {POST.map((item) => (
            <Post
              key={item.postID}
              username={item.username}
              profilePic={item.profilePic}
              totalLike={item.totalLike}
              totalComment={item.totalComment}
              description={item.description}
              imageUrl={item.imageUrl}
            />
          ))}
          {/* <Post /> */}
        </ScrollView>
      </View>
    </FlingGestureHandler>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
export default Home;
