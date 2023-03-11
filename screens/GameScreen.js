import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import GuessNumber from "../components/atoms/GuessNumber";
import Title from "../components/atoms/Title";

function generateNumberRandom(min, max, exclud) {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min

  if (randomNumber === exclud)
    return generateNumberRandom(min, max, exclud)
  else
    return randomNumber
}

const GameScreen = ({inputNumber}) => {
  const initialGuessNumber = generateNumberRandom(1, 100, inputNumber)
  const [guessNumber, setGuessNumber] = useState(initialGuessNumber)
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <GuessNumber>{guessNumber}</GuessNumber>
      <View>
        <Text>Higher or Lower ?</Text>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 24,
  },
});
