import { View, StyleSheet } from "react-native";
import COLORS from "../../utils/colors";

const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: 36,
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 8,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 6 },
    shadowRadius: 6,
    shadowOpacity: 0.2,
    backgroundColor: COLORS.primary800,
  },
});
