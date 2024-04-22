import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import ItemListCategory from "../screens/ItemListCategory";
import ItemDetail from "../screens/ItemDetail";
import Home from "../screens/Home";
import Header from "../components/Header";

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        header: () => {
          return (
            <Header
              title={
                route.name === "Home"
                  ? "CoderTienda"
                  : route.name === "ItemListCategory"
                  ? "Productos"
                  : "Detail"
              }
            />
          );
        },
      })}
    >
      <Stack.Screen component={Home} name="Home" />
      <Stack.Screen component={ItemListCategory} name="ItemListCategory" />
      <Stack.Screen component={ItemDetail} name="Detail" />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;

const styles = StyleSheet.create({});
