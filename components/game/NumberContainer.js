import { View, Text, StyleSheet } from "react-native";
import COLORS from "../../utils/colors";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderColor: COLORS.primary500,
    padding: 24,
    borderRadius: 8,
    margin: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: COLORS.primary500,
    fontSize: 36,
    fontFamily: 'open-sans-bold',
  },
});
