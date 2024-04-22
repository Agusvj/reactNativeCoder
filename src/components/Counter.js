import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { colors } from "../constants/colors";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "../features/Counter/counterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counterReducer.value);
  const [inputToAdd, setInputToAdd] = useState(null);
  // let count = 0;

  console.log(count);

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Pressable style={styles.button} onPress={() => dispatch(decrement())}>
          <Text style={styles.buttonText}>-</Text>
        </Pressable>
        <Text style={styles.span}>{count}</Text>
        <Pressable style={styles.button} onPress={() => dispatch(increment())}>
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
      </View>
      <View style={styles.buttonsContainer}>
        <TextInput
          placeholder="Cantidad a aumentar"
          style={styles.spanInput}
          onChangeText={(value) => setInputToAdd(Number(value))}
          value={inputToAdd}
        />
        <Pressable
          style={styles.button}
          onPress={() => dispatch(incrementByAmount(inputToAdd))}
        >
          <Text style={styles.buttonText}>Add</Text>
        </Pressable>
      </View>
      <Pressable style={styles.button} onPress={() => dispatch(reset())}>
        <Text style={styles.buttonText}>Reset</Text>
      </Pressable>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: colors.secondary,
    padding: 10,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  button: {
    padding: 10,
    backgroundColor: colors.main,
  },
  span: {
    backgroundColor: "white",
    width: "60%",
    padding: 10,
    textAlign: "center",
    fontSize: 20,
    color: colors.main,
  },
  spanInput: {
    backgroundColor: "white",
    width: "60%",
    padding: 10,
    textAlign: "center",
    fontSize: 16,
    color: colors.main,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: "AtomicAge_400Regular",
    color: "white",
  },
});
