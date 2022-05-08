// import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import COLORS from "./utils/colors";
import GameOverScreen from "./screens/GameOverScreen";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(false);
  const [numberOfRounds, setNumberOfRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  };

  const gameOverHandler = (totalRounds) => {
    setGameIsOver(true);
    setNumberOfRounds(totalRounds);
  };

  const startNewGame = () => {
    setUserNumber(null);
    setNumberOfRounds(0)
  };

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (gameIsOver && userNumber) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        numberOfRounds={numberOfRounds}
        onStartNewGame={startNewGame}
      />
    );
  }

  return (
    <LinearGradient
      colors={[COLORS.accent500, COLORS.primary700]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/background-dice.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.bgImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  bgImage: {
    opacity: 0.1,
  },
});
