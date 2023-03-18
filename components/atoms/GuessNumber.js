import { Text, View, StyleSheet } from "react-native";
import colors from "../../constants/colors";

const GuessNumber = ({ children }) => {
  return (
    <View style={styles.boxContainer}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

export default GuessNumber;

const styles = StyleSheet.create({
  boxContainer: {
    padding: 20,
    marginVertical: 15,
    borderWidth: 2,
    backgroundColor: colors.purple900,
    borderColor: colors.purple100,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.yellow700,
  }
});
