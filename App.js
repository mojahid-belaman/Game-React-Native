import { ImageBackground, StyleSheet } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [pickNumber, setPickNumber] = useState();

  function pickNumberHandler(pickNumber) {
    setPickNumber(pickNumber);
  }

  let screen = <StartGameScreen onScreenHandler={pickNumberHandler} />;

  if (pickNumber) {
    screen = <GameScreen />;
  }
  return (
    <LinearGradient colors={["#ba68c8", "#4a148c"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/dice.jpg")}
        resizeMode={"cover"}
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        {screen}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
