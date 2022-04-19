import ChatBlock from "../components/ChatBlock";
import React, { useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import ChatHeader from "../components/ChatHeader";
import { DATA } from "../mockdata/MOCK";
import ChatTextInput from "../components/ChatTextInput";
import axios from "axios";
import { Context as DataContext } from "../context/DataContext";
import Chat from "components/Chat";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
const ChatDetail = ({ route, navigation }) => {
  const firstUpdate = useRef(true);
  const { lastChat, profilePic, username, follower, totalPost } = route.params;

  const { state, addChat } = React.useContext(DataContext);

  const scrollRef = useRef();

  const [isTyping, setIsTyping] = React.useState(false);

  const [numberInfo, setNumberInfo] = React.useState({
    follower: 0,
    totalPost: 0,
  });

  const ChatLog = state.chat.filter((item) => item.name == username)[0].Chat;
  // console.log(state.chat.filter((item) => item.name == username)[0]); // try
  // console.log(ChatLog, "chat log rend");
  const OtherChat = state.chat.filter((item) => item.name != username);
  // const [ChatLog, setChatLog] = React.useState([
  //   { chatId: 0, type: 1, text: lastChat, date: new Date() },
  // ]);
  const person = DATA.filter((item) => item.name == username);

  const AddChatLog = (text: String, type: number) => {
    // setChatLog((prevState) => [
    //   ...prevState,
    //   {
    //     chatId: prevState.length + 1,
    //     type: type,
    //     text: text,
    //     date: new Date(),
    //   },
    // ]);
    const newChat = [
      ...OtherChat,
      {
        name: username,
        Chat: [...ChatLog, { id: ChatLog.length + 1, type: type, word: text }],
      },
    ];
    addChat(newChat);
  };

  useEffect(() => {
    const replyBack = async () => {
      if (firstUpdate.current) {
        firstUpdate.current = false;
        return;
      }
      const rand = getRandomInt(2);
      console.log(rand);

      if (isTyping || ChatLog[ChatLog.length - 1].type == 1 || rand == 0)
        return;
      try {
        // setDisableChat(false);
        const response = await axios.get("https://api.kanye.rest");
        setIsTyping(true);
        (scrollRef as any).current.scrollToEnd({ animated: true });
        setTimeout(() => {
          //////////ADDDD  D
          const newChat = [
            ...OtherChat,
            {
              name: username,
              Chat: [
                ...ChatLog,
                { id: ChatLog.length + 1, type: 1, word: response.data.quote },
              ],
            },
          ];
          addChat(newChat);
          // AddChatLog(response.data.quote, 1);
          // setDisableChat(true);
          setIsTyping(false);
        }, 500);
      } catch (error) {
        console.error(error);
      }
    };

    replyBack();
  }, [ChatLog]);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      keyboardVerticalOffset={Platform.OS === "ios" ? 47 : 0}
      behavior={Platform.OS === "ios" ? "padding" : null}
    >
      <ChatHeader username={username} profilePic={profilePic} />
      <ScrollView
        style={[styles.pane]}
        contentContainerStyle={{
          flexGrow: 1,
        }}
        ref={scrollRef}
        onContentSizeChange={() => {
          (scrollRef as any).current.scrollToEnd({ animated: true });
        }}
      >
        <Image source={{ uri: profilePic }} style={styles.pic} />
        <Text style={styles.bigText}>{username}</Text>
        <Text style={styles.midText}>{username} · Instagram</Text>
        <Text style={[styles.midText, { color: "grey" }]}>
          ผู้ติดตาม {person[0].follower} คน · {person[0].totalPost} โพสต์
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.push("profile", { username: username })}
        >
          <Text style={styles.buttonText}>ดูโปรไฟล์</Text>
        </TouchableOpacity>
        <View style={{ flex: 1 }}></View>
        <View
          style={{
            flex: 0,
            paddingHorizontal: 10,
          }}
        >
          {ChatLog.map((chat) => (
            <ChatBlock
              chat={chat.word}
              type={chat.type}
              key={chat.id.toString()}
            />
          ))}
        </View>
        {isTyping && (
          <Text style={{ color: "white", marginLeft: 10 }}>
            {username} is typing...
          </Text>
        )}
      </ScrollView>

      <ChatTextInput callback={AddChatLog} />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  pic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: "center",
    marginTop: 20,
  },
  pane: {
    flex: 1,
  },
  bigText: {
    color: "white",
    alignSelf: "center",
    marginTop: 15,
    fontSize: 20,
    fontWeight: "bold",
  },
  midText: {
    color: "white",
    fontSize: 14,
    alignSelf: "center",
  },
  button: {
    width: 75,
    height: 27,
    alignSelf: "center",
    marginTop: 20,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",

    fontSize: 12,
    fontWeight: "bold",
  },
});
export default ChatDetail;
