import { StyleSheet, Text, View } from "react-native";

import Categories from "../components/Categories.js";

const Home = ({ setCategorySelected }) => {
  return (
    <View>
      <Categories />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  noItem: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    margin: 25,
  },
});
