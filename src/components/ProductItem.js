import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";

const ProductItem = ({ item, setProductDetailId }) => {
  return (
    <Pressable style={styles.additionalStylesCard}>
      <Text style={styles.textCategory}>{item.title}</Text>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={{ uri: item.images[0] }}
      />
    </Pressable>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
    borderRadius: 8,
  },
  additionalStylesCard: {
    padding: 10,
    flexDirection: "row",
    height: 120,
    width: "90%",
    justifyContent: "space-between",
    margin: 10,
    backgroundColor: "#164e63",
    borderRadius: 8,
  },
  textCategory: {
    color: "white",
    fontWeight: "bold",
  },
});
