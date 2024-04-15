import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import categories from "../data/categories.json";
import CategoryItem from "./CategoryItem.js";
import { colors } from "../constants/colors.js";

const Categories = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        renderItem={({ item }) => (
          <CategoryItem category={item} navigation={navigation} />
        )}
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
    backgroundColor: colors.terciary,
  },
});
