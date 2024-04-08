import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import categories from "../data/categories.json";
import CategoryItem from "./CategoryItem.js";

const Categories = () => {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.container}
        renderItem={({ item }) => <CategoryItem category={item} />}
        data={categories}
        keyExtractor={(category) => category}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
});
