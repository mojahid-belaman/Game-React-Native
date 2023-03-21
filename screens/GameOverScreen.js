import {
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import PrimaryButton from "../components/atoms/PrimaryButton";
import Title from "../components/atoms/Title";
import colors from "../constants/colors";

const GameOverScreen = ({ roundNumber, pickNumber, onNewStartGame }) => {
  const { width, height } = useWindowDimensions();
  let imageSize = 250;
  if (width < 380) imageSize = 150;
  if (height < 400) imageSize = 120;

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };
  return (
    <ScrollView>
      <View style={styles.rootContainer}>
        <Title>Game Is Over</Title>
        <View style={[styles.imageContainer, imageStyle]}>
          <Image
            source={require("../assets/images/gameOver.jpg")}
            style={styles.image}
          />
        </View>
        <Text style={styles.textContainer}>
          Your Phone needed <Text style={styles.highligh}>{roundNumber}</Text>{" "}
          rounds to guess the number{" "}
          <Text style={styles.highligh}>{pickNumber}</Text>.
        </Text>
        <PrimaryButton onPress={onNewStartGame}>Start New Game</PrimaryButton>
      </View>
    </ScrollView>
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
