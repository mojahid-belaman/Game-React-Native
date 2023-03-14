import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { Text, View, StyleSheet } from "react-native";
import GuessNumber from "../components/atoms/GuessNumber";
import InstructionText from "../components/atoms/InstructionText";
import PrimaryButton from "../components/atoms/PrimaryButton";
import Title from "../components/atoms/Title";
import Card from "../components/organism/Card";

let maxBoundry = 100;
let minBoundry = 1;

function generateNumberRandom(min, max, exclud) {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;

  if (randomNumber === exclud) return generateNumberRandom(min, max, exclud);
  else return randomNumber;
}

const GameScreen = ({ inputNumber, onGameOver }) => {
  const initialGuessNumber = generateNumberRandom(1, 100, inputNumber);
  const [guessNumber, setGuessNumber] = useState(initialGuessNumber);

  useEffect(() => {
    if (guessNumber == inputNumber) {
      onGameOver(true);
    }
  }, [guessNumber, inputNumber, onGameOver]);

  function nextGuessNumber(direction) {
    console.log(minBoundry, maxBoundry);
    if (
      (direction === "lower" && guessNumber < inputNumber) ||
      (direction === "higher" && guessNumber > inputNumber)
    ) {
      Alert.alert("Don't Lie...!", "You know that this is wrong...!", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundry = guessNumber;
    } else {
      minBoundry = guessNumber + 1;
    }
    const redefineNumber = generateNumberRandom(
      minBoundry,
      maxBoundry,
      guessNumber
    );
    setGuessNumber(redefineNumber);
  }
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <GuessNumber>{guessNumber}</GuessNumber>
      <Card>
        <InstructionText>Higher or Lower ?</InstructionText>
        <View style={styles.btnContainer}>
          <View style={styles.btnSubContainer}>
            <PrimaryButton onPress={nextGuessNumber.bind(this, "lower")}>
              -
            </PrimaryButton>
          </View>
          <View style={styles.btnSubContainer}>
            <PrimaryButton onPress={nextGuessNumber.bind(this, "higher")}>
              +
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 24,
  },
  btnContainer: {
    flexDirection: "row",
  },
  btnSubContainer: {
    flex: 1,
  },
});
