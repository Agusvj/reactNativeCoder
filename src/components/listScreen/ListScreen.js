import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";

const ListScreen = ({ itemList, handleModal }) => {
  return (
    <View>
      <View style={styles.itemsContainer}>
        <FlatList
          style={styles.flatList}
          data={itemList}
          keyExtractor={(food) => food.id.toString()}
          renderItem={(item) => (
            <TouchableOpacity
              style={styles.itemCard}
              onPress={() => handleModal(item.item)}
            >
              <Text style={{ fontWeight: "bold" }}>{item.item.value}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default ListScreen;

const styles = StyleSheet.create({
  itemsContainer: {
    borderColor: "black",
    borderWidth: 1,
    margin: 25,
    borderRadius: 5,
    alignItems: "center",
    padding: 10,
  },
  flatList: {
    width: "100%",
    maxHeight: 500,
  },
  itemCard: {
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "lightblue",
    width: "100%",
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginVertical: 1,
    textAlign: "left",
    borderRadius: 5,
  },
});
