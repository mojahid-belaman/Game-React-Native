import {
  ImageBackground,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [pickNumber, setPickNumber] = useState();
  const [gameOver, setGameOver] = useState(true);

  function pickNumberHandler(pickNumber) {
    setPickNumber(pickNumber);
    setGameOver(false);
  }

  let screen = <StartGameScreen onScreenHandler={pickNumberHandler} />;

  if (pickNumber) {
    screen = <GameScreen inputNumber={pickNumber} onGameOver={setGameOver} />;
  }
  if (gameOver && pickNumber) {
    screen = <GameOverScreen />;
  }
  return (
    <LinearGradient
      colors={[Colors.purple300, Colors.purple900]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/images/dice.jpg")}
        resizeMode={"cover"}
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView
          style={{
            paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
            height: "100%",
          }}
        >
          {screen}
        </SafeAreaView>
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
