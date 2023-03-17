import { Text, View, StyleSheet } from "react-native";
import colors from "../../constants/colors";

const GuessLogItems = ({ guessNmber, roundNumber }) => {
  return (
    <View style={styles.boxContainer}>
      <Text style={styles.text}>#{roundNumber}</Text>
      <Text style={styles.text}>Opponent's Guess {guessNmber}</Text>
    </View>
  );
};

export default GuessLogItems;

const styles = StyleSheet.create({
  boxContainer: {
    backgroundColor: colors.white,
    borderColor: colors.purple900,
    borderRadius: 15,
    borderWidth: 2,
    padding: 10,
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    width: '100%',
    elevation: 4,
  },
  text: {
    fontSize: 16
  }
});
