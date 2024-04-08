import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import Home from "./src/screens/Home.js";
import Header from "./src/global/Header.js";
import ItemListCategory from "./src/screens/ItemListCategory.js";

export default function App() {
  const [categorySelected, setCategorySelected] = useState("");
  return (
    <View style={styles.container}>
      <Header />
      {categorySelected ? (
        <ItemListCategory
          category={categorySelected}
          setCategorySelected={setCategorySelected}
        />
      ) : (
        <Home setCategorySelected={setCategorySelected} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
