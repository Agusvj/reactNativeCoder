import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import allProducts from "../data/products.json";
import Search from "../components/search/Search";
import ProductItem from "../components/ProductItem.js";

const ItemListCategory = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    if (category) {
      const products = allProducts.filter(
        (product) => product.category === category
      );
      const productsFiltered = products.filter((product) =>
        product.title.includes(keyword)
      );
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
        <Search onSearch={setKeyword} />
        <FlatList
          data={products}
          renderItem={({ item }) => <ProductItem item={item}></ProductItem>}
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
    backgroundColor: "#082f49",
    width: "100%",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});
