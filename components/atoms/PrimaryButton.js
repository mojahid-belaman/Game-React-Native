import { Pressable, Text, View, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const PrimaryButton = ({ children, onPress }) => {
  return (
    <View style={styles.btnOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.btnInnerContainer, styles.pressed]
            : styles.btnInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: Colors.purple400 }}
      >
        <Text style={styles.btnText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  btnOuterContainer: {
    borderRadius: 20,
    margin: 5,
    overflow: "hidden",
  },
  btnInnerContainer: {
    backgroundColor: Colors.purple800,
    paddingHorizontal: 6,
    paddingVertical: 10,
    elevation: 5,
  },
  btnText: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    color: Colors.white,
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
