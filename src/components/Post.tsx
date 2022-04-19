import React from "react";
import { View, StyleSheet, Text, Dimensions, Image } from "react-native";
import PostHeader from "./PostHeader";
import { useAspectRatio } from "../hooks/useAspectRatio";
import ReactionBar from "./ReactionBar";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
const { width, height } = Dimensions.get("window");

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
const Post = ({
  username,
  profilePic,
  totalLike,
  totalComment,
  description,
  imageUrl,
}) => {
  const ratio = useAspectRatio(imageUrl);

  const [isLiked, setIsLiked] = React.useState(false);
  const [likeTotal, setLikeTotal] = React.useState(totalLike);
  const setLike = (toggle: boolean) => {
    if (toggle) {
      setLikeTotal((prevLike: number) => prevLike + 1);
    } else {
      setLikeTotal((prevLike: number) => prevLike - 1);
    }
  };

  // const handleTap = () => {
  //   if (!isLiked) {
  //     setIsLiked(true);
  //     setLikeTotal((prevLike: number) => prevLike + 1);
  //   }
  // };
  const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    .maxDuration(5000)
    .onStart(() => {
      if (!isLiked) {
        setIsLiked(true);
        setLikeTotal((prevLike: number) => prevLike + 1);
      }
    });

  return (
    <View style={styles.container}>
      <PostHeader username={username} profilePic={profilePic} />
      <GestureDetector gesture={doubleTap}>
        <Image
          style={[
            styles.pic,
            { height: width * ratio, transform: [{ scale: 1 }] },
          ]}
          source={{
            uri: imageUrl,
          }}
          resizeMode="contain"
        />
      </GestureDetector>

      <ReactionBar
        callback={setLike}
        isLiked={isLiked}
        setIsLiked={setIsLiked}
      />
      <Text style={styles.like}>ถูกใจ {numberWithCommas(likeTotal)} คน</Text>
      <Text style={styles.like} numberOfLines={1}>
        <Text style={{ fontWeight: "bold" }}>{username}</Text>
        <Text> {description}</Text>
      </Text>
      <Text style={{ color: "grey", marginLeft: 10 }}>
        ดูความคิดเห็นทั้ง {numberWithCommas(totalComment)} รายการ
      </Text>
      <Text
        style={{ fontSize: 11, marginLeft: 10, marginTop: 2, color: "grey" }}
      >
        2 วันที่แล้ว
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
  },
  pic: {
    width: width,
    height: 1000,
  },
  like: {
    color: "white",
    marginLeft: 10,
  },
});

export default Post;
