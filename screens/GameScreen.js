import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { View, FlatList, StyleSheet, useWindowDimensions } from "react-native";
import GuessNumber from "../components/atoms/GuessNumber";
import InstructionText from "../components/atoms/InstructionText";
import PrimaryButton from "../components/atoms/PrimaryButton";
import SvgAdd from "../components/atoms/SvgAdd";
import SvgMinus from "../components/atoms/SvgMinus";
import Title from "../components/atoms/Title";
import GuessLogItems from "../components/molecules/guessLogItems";
import Card from "../components/organism/Card";

let maxBoundry = 100;
let minBoundry = 1;

function generateNumberRandom(min, max, exclud) {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;

  if (randomNumber === exclud) return generateNumberRandom(min, max, exclud);
  else return randomNumber;
}

const GameScreen = ({ inputNumber, onGameOver, onRoundNumbe }) => {
  const initialGuessNumber = generateNumberRandom(1, 100, inputNumber);
  const [guessNumber, setGuessNumber] = useState(initialGuessNumber);
  const [guessRound, setGuessRound] = useState([initialGuessNumber]);
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    if (guessNumber == inputNumber) {
      onGameOver(true);
    }
  }, [guessNumber, inputNumber, onGameOver]);

  useEffect(() => {
    minBoundry = 1;
    maxBoundry = 100;
  }, []);

  function nextGuessNumber(direction) {
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
    onRoundNumbe((prev) => prev + 1);
    setGuessNumber(redefineNumber);
    setGuessRound((prevGuess) => [redefineNumber, ...prevGuess]);
  }
  let content = (
    <>
      <GuessNumber>{guessNumber}</GuessNumber>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or Lower ?
        </InstructionText>
        <View style={styles.btnContainer}>
          <View style={styles.btnSubContainer}>
            <PrimaryButton onPress={nextGuessNumber.bind(this, "lower")}>
              <SvgMinus fill={"#FFFFFF"} />
            </PrimaryButton>
          </View>
          <View style={styles.btnSubContainer}>
            <PrimaryButton onPress={nextGuessNumber.bind(this, "higher")}>
              <SvgAdd fill={"#FFFFFF"} />
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </>
  );

  if (width > 500) {
    content = (
      <>
        <View style={styles.btnContainerWide}>
          <View style={styles.btnSubContainer}>
            <PrimaryButton onPress={nextGuessNumber.bind(this, "lower")}>
              <SvgMinus fill={"#FFFFFF"} />
            </PrimaryButton>
          </View>
          <GuessNumber>{guessNumber}</GuessNumber>
          <View style={styles.btnSubContainer}>
            <PrimaryButton onPress={nextGuessNumber.bind(this, "higher")}>
              <SvgAdd fill={"#FFFFFF"} />
            </PrimaryButton>
          </View>
        </View>
      </>
    );
  }
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      {content}
      <View style={styles.itemsContainer}>
        <FlatList
          data={guessRound}
          renderItem={(round) => (
            <GuessLogItems
              guessNmber={round.item}
              roundNumber={guessRound.length - round.index}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  instructionText: {
    marginBottom: 20,
  },
  btnContainer: {
    flexDirection: "row",
  },
  btnSubContainer: {
    flex: 1,
  },
  btnContainerWide: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemsContainer: {
    flex: 1,
    padding: 15,
  },
});
