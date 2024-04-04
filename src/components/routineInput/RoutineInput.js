import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React from "react";

const RoutineInput = ({ textItem, setTextItem, addItem }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Item de lista"
        style={styles.input}
        onChangeText={(e) => setTextItem(e)}
        value={textItem}
      />
      <Button title="Add" onPress={addItem} />
    </View>
  );
};

export default RoutineInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 25,
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    width: 250,
  },
});
