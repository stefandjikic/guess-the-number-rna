import { View, Text, StyleSheet } from "react-native";
import COLORS from "../../utils/colors";

function LogItem({ roundNumber, currentGuess }) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's Guess: {currentGuess}</Text>
    </View>
  );
}

export default LogItem;

const styles = StyleSheet.create({
  listItem: {
    borderColor: COLORS.primary800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginTop: 14,
    backgroundColor: COLORS.accent500,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    // adnroid
    elevation: 4,
    // iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  itemText: {
    fontFamily: 'open-sans',
  }
});
