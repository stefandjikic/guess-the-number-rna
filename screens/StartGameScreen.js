import { useState } from "react";
import { View, TextInput, Text, StyleSheet, Alert } from "react-native";
import MainButton from "../components/ui/MainButton";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import Subtitle from "../components/ui/Subtitle";
import COLORS from "../utils/colors";

function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setenteredNumber] = useState("");

  const numberInputHandler = (e) => {
    setenteredNumber(e);
  };

  const resetInputHandler = () => {
    setenteredNumber("");
  };

  const confirmInputHandler = () => {
    const parsedNumber = parseInt(enteredNumber);
    if (isNaN(parsedNumber) || parsedNumber <= 0 || parsedNumber > 99) {
      Alert.alert(
        "Invalid number",
        "Number has to be a number between 1 and 99",
        [{ text: "OK", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    onPickNumber(parsedNumber);
  };

  return (
    <View style={styles.rootContainer}>
      <Title>Guess The Number</Title>
      <Card>
        <Subtitle>Enter a number</Subtitle>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={numberInputHandler}
          value={enteredNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <MainButton onPress={resetInputHandler}>Reset</MainButton>
          </View>
          <View style={styles.buttonContainer}>
            <MainButton onPress={confirmInputHandler}>Confirm</MainButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 60,
    alignItems: 'center'
  },
  numberInput: {
    width: 65,
    height: 50,
    fontSize: 32,
    borderBottomWidth: 2,
    borderBottomColor: COLORS.accent500,
    color: COLORS.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
