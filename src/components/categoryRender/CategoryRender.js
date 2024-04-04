import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const CategoryRender = ({
  categoryList,
  addCategory,
  setCategoryText,
  categoryText,
  handleModal,
}) => {
  return (
    <View>
      <View style={styles.itemsContainer}>
        <FlatList
          style={styles.flatList}
          data={categoryList}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => handleModal(item)}
              style={styles.itemCard}
            >
              <Text>{item}</Text>
            </TouchableOpacity>
          )}
        />
        <TextInput
          placeholder="Añadir Categoria"
          onChangeText={(e) => setCategoryText(e)}
          value={categoryText}
          style={styles.textInput}
        />
        <Button title="add" onPress={addCategory}></Button>
      </View>
    </View>
  );
};

export default CategoryRender;

const styles = StyleSheet.create({
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
  itemsContainer: {
    borderColor: "black",
    borderWidth: 1,
    margin: 25,
    borderRadius: 5,
    padding: 10,
    maxHeight: 400,
  },
  flatList: {
    width: "100%",
    maxHeight: 500,
  },
  textInput: {
    width: "100%",
    borderColor: "black",
    borderWidth: 1,
    marginVertical: 15,
    borderRadius: 5,
    padding: 3,
  },
});
