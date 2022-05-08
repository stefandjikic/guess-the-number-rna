import { Text, StyleSheet } from "react-native";
import COLORS from "../../utils/colors";

const Subtitle = ({ children, style }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default Subtitle;

const styles = StyleSheet.create({
  text: {
    color: COLORS.accent500,
    fontSize: 18,
    fontFamily: 'open-sans',
  },
});
