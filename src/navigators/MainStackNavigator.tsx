import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Login from "../screens/Login";
import MainBottomTab from "./MainBottomTab";
import { Context as AuthContext } from "../context/AuthContext";
import Dm from "../screens/Dm";
import { View } from "react-native";
import Camera from "../screens/Camera";
import MainPagerNavigator from "./MainPagerNavigator";
import ChatDetail from "../screens/ChatDetail";
import { TransitionPresets } from "@react-navigation/stack";
import Profile from "../screens/Profile";
const AuthStack = createStackNavigator();

const MainStackNavigator = () => {
  const { state } = React.useContext(AuthContext);

  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
        presentation: "card",
        gestureEnabled: true,
        animationTypeForReplace: "pop",
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      {!state.token ? (
        <AuthStack.Screen name="auth" component={Login} />
      ) : (
        <>
          <AuthStack.Screen name="tab" component={MainBottomTab} />
          <AuthStack.Screen
            name="dm"
            component={Dm}
            options={{
              // animationEnabled: true,
              gestureDirection: "horizontal",
            }}
          />
          <AuthStack.Screen
            name="camera"
            component={Camera}
            options={{
              animationEnabled: true,
              gestureDirection: "horizontal-inverted",
            }}
          />
          <AuthStack.Screen
            name="chatdetail"
            component={ChatDetail}
            options={{
              animationEnabled: true,
              gestureDirection: "horizontal",
            }}
          />
          <AuthStack.Screen
            name="profile"
            component={Profile}
            options={{
              animationEnabled: true,
              gestureDirection: "horizontal",
            }}
          />
        </>
      )}
    </AuthStack.Navigator>
  );
};

export default MainStackNavigator;
