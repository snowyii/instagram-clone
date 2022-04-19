import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Home from "../screens/Home";
import Dm from "../screens/Dm";
import Camera from "../screens/Camera";
import MainBottomTab from "./MainBottomTab";
const PageTab = createMaterialTopTabNavigator();

const MainPagerNavigator = () => {
  return (
    <PageTab.Navigator tabBar={() => null} initialRouteName="home">
      <PageTab.Screen name="camera" component={Camera} />
      <PageTab.Screen name="home" component={MainBottomTab} />

      <PageTab.Screen name="dm" component={Dm} />
    </PageTab.Navigator>
  );
};

export default MainPagerNavigator;
