import { Image, StyleSheet, Text, View } from "react-native";
import PrimaryButton from "../components/atoms/PrimaryButton";
import Title from "../components/atoms/Title";
import colors from "../constants/colors";

const GameOverScreen = ({ roundNumber, pickNumber, onNewStartGame }) => {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Is Over</Title>
      <View style={styles.imageContainer}>
        <Image source={require("../assets/images/gameOver.jpg")} />
      </View>
      <Text style={styles.textContainer}>
        Your Phone needed <Text style={styles.highligh}>{roundNumber}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.highligh}>{pickNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onNewStartGame}>Start New Game</PrimaryButton>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderColor: colors.white,
    borderWidth: 4,
    margin: 30,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    fontSize: 20,
    color: colors.yellow700,
    fontWeight: "600",
    textAlign: "center",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  highligh: {
    color: colors.purple100,
  },
});
