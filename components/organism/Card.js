import { View, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 26,
    marginHorizontal: 20,
    padding: 20,
    backgroundColor: Colors.purple900,
    borderRadius: 8,
    elevation: 10,
  },
});
