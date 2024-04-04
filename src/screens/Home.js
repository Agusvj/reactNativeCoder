import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import ModalCustom from "../components/modal/ModalCustom.js";
import categories from "../data/categories.json";
import CategoryRender from "../components/categoryRender/CategoryRender.js";

const Home = () => {
  const categoriesFront = categories.map((category) => category);
  const [categoryList, setCategoryList] = useState(categoriesFront);
  const [categoryText, setCategoryText] = useState("");
  const [categorySelected, setCategorySelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [editTextInput, setEditTextInput] = useState("");

  const addCategory = () => {
    setCategoryList((currentList) => [...currentList, categoryText]);
    setCategoryText("");
  };

  const resetList = () => {
    setCategoryList(categories);
  };

  const handleModal = (item) => {
    setCategorySelected(item);
    setModalVisible(!modalVisible);
  };

  const handleDelete = () => {
    const filter = categoryList.filter(
      (category) => category !== categorySelected
    );
    setCategoryList(filter);
    setModalVisible(!modalVisible);
  };

  const handleEdit = () => {
    const categoryEdit = categorySelected;
    const filter = categoryList.filter((category) => category !== categoryEdit);
    setCategoryList(filter);
    setCategoryList((currentList) => [...currentList, editTextInput]);
    setModalVisible(!modalVisible);
  };

  return (
    <View>
      <CategoryRender
        categoryList={categoryList}
        setCategoryText={setCategoryText}
        addCategory={addCategory}
        categoryText={categoryText}
        handleModal={handleModal}
      />

      <ModalCustom
        modalVisible={modalVisible}
        handleDelete={handleDelete}
        handleModal={handleModal}
        categorySelected={categorySelected}
        setCategorySelected={setCategorySelected}
        handleEdit={handleEdit}
        editTextInput={editTextInput}
        setEditTextInput={setEditTextInput}
      />
      <Button title="Reset" onPress={resetList} />
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
