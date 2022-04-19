import ProfileHeader from "../components/ProfileHeader";
import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { DATA, MOCKDATA, POST } from "../mockdata/MOCK";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
import axios from "axios";
import StoryIg from "../components/StoryIg";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Feather } from "@expo/vector-icons";
import { ReelSvg } from "../components/SvgComponent";
import { NavigationContainer } from "@react-navigation/native";

const WIDTH = Dimensions.get("screen").width;
const Profile = ({ route, navigation }) => {
  const { username } = route.params;
  const item = DATA.filter((item) => item.name == username)[0];
  const [randomDes, setRandomDes] = React.useState("");
  const post = POST.filter((item) => item.username == username);
  useEffect(() => {
    const getRandom = async () => {
      const response = await axios.get("https://api.kanye.rest");
      setRandomDes(response.data.quote);
    };
    getRandom();
  }, []);
  return (
    <>
      <ProfileHeader username={item.name} />

      <ScrollView style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 15,
            backgroundColor: "black",
          }}
        >
          <LinearGradient
            start={[1, 2]}
            end={[0, 0]}
            colors={["red", "orange"]}
            style={styles.outer}
          >
            <View style={[styles.picOut]}>
              <Image
                source={{
                  uri: item.profilePic,
                }}
                style={styles.pic}
                resizeMode="cover"
              />
            </View>
          </LinearGradient>
          <View style={styles.numTag}>
            <Text style={styles.text}>{post.length}</Text>
            <Text style={{ color: "white" }}>โพสต์</Text>
          </View>
          <View style={styles.numTag}>
            <Text style={styles.text}>301K</Text>
            <Text style={{ color: "white" }}> ผู้ติดตาม</Text>
          </View>
          <View style={styles.numTag}>
            <Text style={styles.text}>16</Text>
            <Text style={{ color: "white" }}>กำลังติดตาม</Text>
          </View>
        </View>
        <Text style={{ color: "white", marginLeft: 10, marginTop: 10 }}>
          {username}
        </Text>
        <Text style={{ color: "white", marginLeft: 10, marginTop: 0 }}>
          {randomDes}
        </Text>
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            justifyContent: "space-around",
            marginTop: 10,
          }}
        >
          <TouchableOpacity
            style={{
              width: "40%",
              height: 26,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 5,
              borderColor: "grey",
              borderWidth: 1,
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>
              กำลังติดตาม
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: "40%",
              height: 26,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 5,
              borderColor: "grey",
              borderWidth: 1,
            }}
            onPress={() =>
              navigation.navigate(
                "chatdetail" as never,
                {
                  lastChat: "333",
                  profilePic: item.profilePic,
                  username: username,
                } as never
              )
            }
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>
              ส่งข้อความ
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 26,
              height: 26,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 5,
              borderColor: "grey",
              borderWidth: 1,
            }}
          >
            <AntDesign
              name="adduser"
              size={20}
              color="white"
              style={{ transform: [{ scaleX: -1 }] }}
            />
          </TouchableOpacity>
        </View>
        <StoryIg data={MOCKDATA} customStyle={{ marginTop: 18 }} />
        <View
          style={{
            height: 50,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: Dimensions.get("screen").width / 4,
              alignItems: "center",
              borderBottomWidth: 2,
              borderBottomColor: "white",
              height: 50,
              justifyContent: "center",
            }}
          >
            <MaterialCommunityIcons name="grid" size={24} color="white" />
          </View>
          <View
            style={{
              width: Dimensions.get("screen").width / 4,
              alignItems: "center",
            }}
          >
            <ReelSvg style={{}} />
          </View>

          <View
            style={{
              width: Dimensions.get("screen").width / 4,
              alignItems: "center",
            }}
          >
            <Feather name="play" size={24} color="grey" />
          </View>
          <View
            style={{
              width: Dimensions.get("screen").width / 4,
              alignItems: "center",
            }}
          >
            <MaterialCommunityIcons
              name="clipboard-account-outline"
              size={24}
              color="grey"
            />
          </View>
        </View>
        {post.map((item) => (
          <Image
            source={{ uri: item.imageUrl }}
            style={{ width: WIDTH / 3, height: WIDTH / 3 }}
            key={item.postID}
          />
        ))}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  outer: {
    width: 91,
    height: 91,
    borderRadius: 45.5,

    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  picOut: {
    width: 87,
    height: 87,
    borderRadius: 43.5,

    borderWidth: 0,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  pic: {
    width: 82,
    height: 82,
    borderRadius: 41,
  },
  numTag: {
    alignItems: "center",
    flex: 1,
    justifyContent: "space-around",
  },
  text: {
    fontWeight: "bold",
    color: "white",
  },
});
export default Profile;
