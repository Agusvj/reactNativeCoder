import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import Card from "./Card";

const CategoryItem = ({ category, navigation }) => {
  return (
    <Pressable
      onPress={() => navigation.navigate("ItemListCategory", { category })}
    >
      <Card style={styles.cardContainer}>
        <Text style={styles.text}>{category}</Text>
      </Card>
    </Pressable>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 30,
    marginVertical: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "flex-start",
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    color: "white",
    fontFamily: "SpaceMono_700Bold",
  },
});
