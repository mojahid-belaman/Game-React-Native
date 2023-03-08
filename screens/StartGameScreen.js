import { StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/atoms/PrimaryButton";

const StartGameScreen = () => {
  return (
    <View style={styles.boxContainer}>
      <TextInput style={styles.inputContainer} />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  boxContainer: {
    marginTop: 80,
    marginHorizontal: 20,
    padding: 20,
    backgroundColor: "#8b0000",
    borderRadius: 8,
    elevation: 10,
  },
  inputContainer: {
    height: 40,
    width: 80,
    paddingHorizontal: 10,
    borderBottomColor: "#ffd700",
    color: '#ffd700',
    borderWidth: 2,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});
