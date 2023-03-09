import { StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/atoms/PrimaryButton";

const StartGameScreen = () => {
  return (
    <View style={styles.boxContainer}>
      <TextInput
        style={styles.inputContainer}
        maxLength={2}
        keyboardType="numeric"
      />
      <View style={styles.boxButton}>
        <View style={styles.btnContainer}>
          <PrimaryButton onPress={() => {}}>Reset</PrimaryButton>
        </View>
        <View style={styles.btnContainer}>
          <PrimaryButton>Confirm</PrimaryButton>
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
    backgroundColor: "#4a148c",
    borderRadius: 8,
    elevation: 10,
    alignItems: "center",
  },
  inputContainer: {
    height: 40,
    width: 80,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderBottomColor: "#ffd700",
    color: "#ffd700",
    borderBottomWidth: 2,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  boxButton: {
    flexDirection: "row",
  },
  btnContainer: {
    flex: 1
  }
});
