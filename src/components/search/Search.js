import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import { colors } from "../../constants/colors";

const Search = ({ onSearch, goBack = () => {} }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const search = () => {
    const expression = /\d/;
    if (expression.test(input)) {
      setError("Only search letters");
    } else {
      setError("");
      onSearch(input);
      console.log(input);
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
          <Text style={{ color: "white", fontFamily: "SpaceMono_700Bold" }}>
            Search
          </Text>
        </Pressable>
        <Pressable onPress={removeInput} style={styles.button}>
          <Text style={{ color: "white", fontFamily: "SpaceMono_700Bold" }}>
            Reset
          </Text>
        </Pressable>
        <Pressable onPress={goBack} style={styles.button}>
          <Text style={{ color: "white", fontFamily: "SpaceMono_700Bold" }}>
            GoBack
          </Text>
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
    borderColor: colors.main,
    borderWidth: 2,
    padding: 10,
    borderRadius: 5,
    width: "90%",
    fontSize: 18,
  },
  button: {
    backgroundColor: colors.main,
    paddingHorizontal: 25,
    paddingVertical: 5,
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomColor: colors.main,
    borderBottomWidth: 2,
    width: "100%",
    paddingVertical: 15,
  },
});
