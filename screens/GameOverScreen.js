import { View, Image, Text, StyleSheet } from "react-native";
import COLORS from "../utils/colors";
import Title from "../components/ui/Title";
import MainButton from "../components/ui/MainButton";

function GameOverScreen({
  numberOfRounds = 0,
  userNumber = 0,
  onStartNewGame,
}) {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over</Title>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../assets/success.png")} />
      </View>
      <Text style={styles.summaryText}>
        Opponent needed <Text style={styles.highlight}>{numberOfRounds}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>
      <MainButton onPress={onStartNewGame}>Start New Game</MainButton>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    height: 300,
    width: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: COLORS.primary500,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    textAlign: "center",
    fontSize: 24,
    marginBottom: 24,
    color: "#fff"
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: COLORS.accent500,
  },
});
