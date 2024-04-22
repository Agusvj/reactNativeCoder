import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import CartData from "../data/cart.json";
import CartItem from "../components/CartItem.js";
import { colors } from "../constants/colors.js";

const Cart = () => {
  // console.log(CartData);
  const total = CartData.reduce(
    (acumulador, currentItem) =>
      (acumulador += currentItem.price * currentItem.quantity),
    0
  );

  let subtotal = 0;

  for (const currentItem of CartData) {
    console.log(currentItem.id);
    subtotal += currentItem.price * currentItem.quantity;
  }

  console.log(subtotal);

  return (
    <View style={styles.container}>
      <FlatList
        data={CartData}
        keyExtractor={(cartItem) => cartItem.id}
        renderItem={({ item }) => {
          return <CartItem cartItem={item} />;
        }}
      />
      <View style={styles.totalContainer}>
        <Pressable style={{ width: "100%", backgroundColor: colors.main }}>
          <Text style={{ color: "white", textAlign: "center" }}>Confirm</Text>
        </Pressable>
        <Text>Total: ${total}</Text>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flex: 1,
    marginBottom: 120,
  },
  totalContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
