import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { colors } from "../constants/colors";

const ProductItem = ({ item, navigation }) => {
  const { width, height } = useWindowDimensions();

  return (
    <Pressable
      style={styles.additionalStylesCard}
      onPress={() => navigation.navigate("Detail", { productId: item.id })}
    >
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
    minHeight: 90,
    minWidth: 90,
    width: "30%",
    borderRadius: 8,
  },
  additionalStylesCard: {
    padding: 10,
    flexDirection: "row",
    height: 120,
    width: "90%",
    justifyContent: "space-between",
    margin: 10,
    backgroundColor: colors.main,
    borderRadius: 8,
  },
  textCategory: {
    color: "white",
    width: "60%",
    fontFamily: "SpaceMono_700Bold",
  },
});
