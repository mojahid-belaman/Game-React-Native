import { useState } from "react";
import {
  Alert,
  StyleSheet,
  TextInput,
  View,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import InstructionText from "../components/atoms/InstructionText";
import PrimaryButton from "../components/atoms/PrimaryButton";
import Title from "../components/atoms/Title";
import Card from "../components/organism/Card";
import Colors from "../constants/colors";

const StartGameScreen = ({ onScreenHandler }) => {
  const [enteredNumber, setEnteredNumber] = useState("");
  const { width, height } = useWindowDimensions();

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
    onScreenHandler(enteredNumber);
  }

  const marginTopScreen = height < 400 ? 20 : 100;

  return (
    <ScrollView>
      <KeyboardAvoidingView behavior="position">
        <View style={[styles.rootContainer, { marginTop: marginTopScreen }]}>
          <Title>Guess My Number</Title>
          <View style={{ marginVertical: 10 }}></View>
          <Card>
            <InstructionText>Enter a Number</InstructionText>
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
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
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
