import { useState } from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/atoms/PrimaryButton";
import Colors from "../constants/colors";

const StartGameScreen = ({onScreenHandler}) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  function inputNumberHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function resetInput() {
    setEnteredNumber("");
  }

  function confirmData() {
    const regex = new RegExp("^([1-9]|[1-9][0-9])$");
    if (!regex.test(enteredNumber)) {
      Alert.alert(
        "Invalid Number",
        "The Number has to be a number between 1 and 99.",
        [{ text: "Ok", style: "destructive", onPress: resetInput }]
      );
    }
    onScreenHandler(enteredNumber)
  }

  return (
    <View style={styles.boxContainer}>
      <TextInput
        style={styles.inputContainer}
        maxLength={2}
        keyboardType="numeric"
        value={enteredNumber}
        onChangeText={inputNumberHandler}
      />
      <View style={styles.boxButton}>
        <View style={styles.btnContainer}>
          <PrimaryButton onPress={resetInput}>Reset</PrimaryButton>
        </View>
        <View style={styles.btnContainer}>
          <PrimaryButton onPress={confirmData}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  boxContainer: {
    marginTop: 80,
    marginHorizontal: 20,
    padding: 20,
    backgroundColor: Colors.purple900,
    borderRadius: 8,
    elevation: 10,
    alignItems: "center",
  },
  inputContainer: {
    height: 40,
    width: 80,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderBottomColor: Colors.yellow700,
    color: Colors.yellow700,
    borderBottomWidth: 2,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  boxButton: {
    flexDirection: "row",
  },
  btnContainer: {
    flex: 1,
  },
});
