import { StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeStackNavigator from "./HomeStackNavigator";
import BottomTabNavigator from "./BottomTabNavigator";

const Navigator = () => {
  return (
    <NavigationContainer>
      {/* <HomeStackNavigator /> */}
      <BottomTabNavigator />
    </NavigationContainer>
  );
};

export default Navigator;

const styles = StyleSheet.create({});
