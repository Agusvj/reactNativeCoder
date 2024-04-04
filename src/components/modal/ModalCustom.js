import { StyleSheet, Text, View, Modal, Button, TextInput } from "react-native";
import React from "react";

const ModalCustom = ({
  modalVisible,
  handleDelete,
  handleModal,
  categorySelected,
  setCategorySelected,
  handleEdit,
  editTextinput,
  setEditTextInput,
}) => {
  return (
    <Modal visible={modalVisible} animationType="fade" transparent={true}>
      <View style={styles.modalStyles}>
        <View style={styles.modalContainer}>
          <View>
            <Text>Queres borrar?</Text>
          </View>
          <View>
            <Text>{categorySelected}</Text>
          </View>
          <View style={styles.buttonModalContainer}>
            <Button title="Borrar" onPress={handleDelete} />
            <Button
              title="Cancelar"
              onPress={() => {
                handleModal();
                setCategorySelected({});
              }}
            />
          </View>
          <View>
            <TextInput
              placeholder="Editar Categoria"
              onChangeText={(e) => setEditTextInput(e)}
              value={editTextinput}
              style={styles.textInput}
            />
            <Button
              title="Editar"
              onPress={() => {
                handleEdit();
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalCustom;

const styles = StyleSheet.create({
  modalStyles: {
    backgroundColor: "black",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalContainer: {
    backgroundColor: "white",
    width: "80%",
    alignItems: "center",
    gap: 20,
    padding: 20,
    borderRadius: 5,
  },
  buttonModalContainer: {
    flexDirection: "row",
    gap: 10,
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
