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
  const [roundNumber, setRoundNumber] = useState(0);

  function pickNumberHandler(pickNumber) {
    setPickNumber(pickNumber);
    setGameOver(false);
  }

  function newStartGame() {
    setRoundNumber(0);
    setPickNumber(null);
  }

  let screen = <StartGameScreen onScreenHandler={pickNumberHandler} />;

  if (pickNumber) {
    screen = (
      <GameScreen
        inputNumber={pickNumber}
        onGameOver={setGameOver}
        onRoundNumbe={setRoundNumber}
      />
    );
  }
  if (gameOver && pickNumber) {
    screen = (
      <GameOverScreen
        roundNumber={roundNumber}
        pickNumber={pickNumber}
        onNewStartGame={newStartGame}
      />
    );
  }
  return (
    <>
      <StatusBar barStyle={"default"} />
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
              paddingTop:
                Platform.OS === "android" ? StatusBar.currentHeight : 0,
              height: "100%",
            }}
          >
            {screen}
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
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
