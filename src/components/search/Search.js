import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const search = () => {
    const expression = /\d/;
    if (expression.test(input)) {
      setError("Only search letters");
    } else {
      setError("");
      onSearch(input);
    }
  };

  const removeInput = () => {
    setInput("");
    setError("");
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={input}
        onChangeText={setInput}
        placeholder="Search Product---"
      />
      <View style={styles.buttonContainer}>
        <Pressable onPress={search} style={styles.button}>
          <Text style={{ color: "white", fontWeight: "bold" }}>Search</Text>
        </Pressable>
        <Pressable onPress={removeInput} style={styles.button}>
          <Text style={{ color: "white", fontWeight: "bold" }}>Reset</Text>
        </Pressable>
      </View>
      {error ? <Text>{error}</Text> : null}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 10,
    width: "100%",
  },
  input: {
    color: "white",
    borderColor: "white",
    borderWidth: 2,
    padding: 10,
    borderRadius: 5,
    width: "90%",
    fontSize: 18,
  },
  button: {
    backgroundColor: "#164e63",
    paddingHorizontal: 25,
    paddingVertical: 5,
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomColor: "white",
    borderBottomWidth: 2,
    width: "100%",
    paddingVertical: 15,
  },
});
