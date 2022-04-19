import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import axios from "axios";
import { SimpleLineIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { StackActions, useIsFocused } from "@react-navigation/native";
type ChatType = {
  username: String;
  profileUrl: any;
};
import { Context as DataContext } from "../context/DataContext";

import { useNavigation } from "@react-navigation/native";
const Chat = ({ username, profileUrl }: ChatType) => {
  const { state } = React.useContext(DataContext);

  const isFocused = useIsFocused();

  const navigation = useNavigation();
  const [lastChat, setLastChat] = useState("");
  useEffect(() => {
    // axios
    //   .get("https://api.kanye.rest")
    //   .then(function (response) {
    //     // handle success

    //     setLastChat(response.data.quote);
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     console.log(error);
    //   });
    // console.log(state.chat);
    const r = state.chat.filter((item) => item.name == username)[0].Chat;
    // console.log(r[r.length - 1]);
    // console.log("last chat", lastChat);

    setLastChat(r[r.length - 1].word);
  }, [isFocused]);

  return (
    <TouchableOpacity
      style={[styles.container]}
      activeOpacity={0.5}
      onPress={
        () =>
          navigation.navigate(
            "chatdetail" as never,
            {
              lastChat: lastChat,
              profilePic: profileUrl,
              username: username,
            } as never
          )
        // navigation.dispatch(
        //   StackActions.navigate("chatdetail", {
        //     lastChat: lastChat,
        //     profilePic: profileUrl,
        //     username: username,
        //   })
        // )
      }
    >
      <Image source={{ uri: profileUrl }} style={styles.image} />
      <View style={{ marginLeft: 19, flex: 1 }}>
        <Text style={styles.textBig}>{username}</Text>
        <Text style={styles.textSmall} numberOfLines={1}>
          {lastChat}
        </Text>
      </View>
      <SimpleLineIcons
        name="camera"
        style={{ right: 10, position: "absolute" }}
        size={24}
        color="grey"
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: "black",
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 10,
  },
  textBig: {
    color: "white",
  },
  textSmall: {
    color: "grey",
    marginRight: 60,
  },
  button: {
    alignItems: "center",
    backgroundColor: "black",
    padding: 10,
  },
});
export default Chat;
