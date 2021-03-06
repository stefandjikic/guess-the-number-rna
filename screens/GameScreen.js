import { useState, useEffect, useMemo } from "react";
import { View, Text, StyleSheet, Alert, FlatList } from "react-native";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import MainButton from "../components/ui/MainButton";
import Card from "../components/ui/Card";
import Subtitle from "../components/ui/Subtitle";
import { Ionicons } from "@expo/vector-icons";
import LogItem from "../components/game/LogItem";

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
  // const initialGuess = useMemo(
  //   () => generateRandomBetween(minBoundary, maxBoundary, userNumber),
  //   []
  // );
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [arrayOfGuesses, setArrayOfGuesses] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(arrayOfGuesses.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  function generateRandomBetween(min, max, exclude) {
    const randomNum = Math.floor(Math.random() * (max - min)) + min;

    if (randomNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return randomNum;
    }
  }

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Shame!", "You know this is wrong...", [
        { text: "Okay", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    console.log(minBoundary, maxBoundary);
    const newRandomNumner = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRandomNumner);
    setArrayOfGuesses((prevState) => [newRandomNumner, ...prevState]);
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <Subtitle style={styles.subtitle}>Higher or Lower?</Subtitle>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <MainButton onPress={() => nextGuessHandler("greater")}>
              <Ionicons name="md-add" size={24} />
            </MainButton>
          </View>
          <View style={styles.buttonContainer}>
            <MainButton onPress={() => nextGuessHandler("lower")}>
              <Ionicons name="md-remove" size={24} />
            </MainButton>
          </View>
        </View>
      </Card>
      <View style={styles.flatListContainer}>
        <FlatList
          data={arrayOfGuesses}
          renderItem={(itemData) => (
            <LogItem
              roundNumber={arrayOfGuesses.length - itemData.index}
              currentGuess={itemData.item}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
    paddingTop: 36,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  subtitle: {
    marginBottom: 14,
  },
  flatListContainer: {
    flex: 1,
    padding: 16,
  }
});
