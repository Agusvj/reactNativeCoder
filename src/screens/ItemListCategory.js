import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import allProducts from "../data/products.json";
import Search from "../components/search/Search";
import ProductItem from "../components/ProductItem.js";
import { colors } from "../constants/colors.js";

const ItemListCategory = ({ route, navigation }) => {
  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState("");

  const { category } = route.params;

  useEffect(() => {
    if (category) {
      const products = allProducts.filter(
        (product) => product.category === category
      );
      const productsFiltered = products.filter((product) =>
        product.title.includes(keyword)
      );
      setProducts(productsFiltered);
    } else {
      const productsFiltered = allProducts.filter((product) =>
        product.title.includes(keyword)
      );
      setProducts(productsFiltered);
    }
  }, [category, keyword]);

  return (
    <>
      <View style={styles.flatListContainer}>
        <Search onSearch={setKeyword} goBack={() => navigation.goBack()} />
        <FlatList
          data={products}
          renderItem={({ item }) => (
            <ProductItem item={item} navigation={navigation}></ProductItem>
          )}
          keyExtractor={(item) => item.id}
          style={styles.flatlistItems}
        />
      </View>
    </>
  );
};

export default ItemListCategory;

const styles = StyleSheet.create({
  flatListContainer: {
    backgroundColor: "white",
    width: "100%",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    fontFamily: "SpaceMono_700Bold",
  },
});
