import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import { View } from "react-native";
import { Svghome, SvgMagnify } from "../components/SvgComponent";
import Search from "../screens/Search";
import MainPagerNavigator from "./MainPagerNavigator";
const BottomTab = createBottomTabNavigator();

const MainBottomTab = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "black",
        },
      }}
    >
      <BottomTab.Screen
        name="homePage"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <View>
                <Svghome focus={focused} />
              </View>
            );
          },
        }}
      />
      <BottomTab.Screen
        name="search"
        component={Search}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <View>
                <SvgMagnify focus={focused} />
              </View>
            );
          },
        }}
      />
    </BottomTab.Navigator>
  );
};

export default MainBottomTab;
