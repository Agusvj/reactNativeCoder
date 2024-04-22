import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../constants/colors.js";
import { useSelector } from "react-redux";

const Header = ({ title }) => {
  const categorySelected = useSelector(
    (state) => state.shopReducer.value.categorySelected
  );
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.main,
    height: 70,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    color: "white",
    fontFamily: "AtomicAge_400Regular",
  },
});
