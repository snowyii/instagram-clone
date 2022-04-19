import { StyleSheet, Text, View, StatusBar as Sta } from "react-native";
import MainBottomTab from "./src/navigators/MainBottomTab";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import MainStackNavigator from "./src/navigators/MainStackNavigator";
import {
  SafeAreaProvider,
  SafeAreaFrameContext,
  SafeAreaView,
} from "react-native-safe-area-context";
import "react-native-gesture-handler";
import React from "react";
import {
  Context as AuthContext,
  Provider as AuthProvider,
} from "./src/context/AuthContext";
import {
  Provider as DataProvider,
  Context as DataContext,
} from "./src/context/DataContext";
import { DATA } from "./src/mockdata/MOCK";
import axios from "axios";
const App = () => {
  const { state, addChat } = React.useContext(DataContext);

  React.useEffect(() => {
    const firstLoader = async () => {
      let newChat = [];
      for (let i = 0; i < DATA.length; i++) {
        const genChat = await axios.get("https://api.kanye.rest");
        newChat = [
          ...newChat,
          {
            name: DATA[i].name,
            Chat: [{ id: 0, type: 1, word: genChat.data.quote }],
          },
        ];
      }

      await addChat(newChat);
      // console.log(state.chat.length);
    };

    firstLoader();
  }, []);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar style="light" />
      <NavigationContainer theme={DarkTheme}>
        <MainStackNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default () => (
  <DataProvider>
    <AuthProvider>
      <App />
    </AuthProvider>
  </DataProvider>
);
