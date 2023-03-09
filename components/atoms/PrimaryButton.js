import { Pressable, Text, View, StyleSheet } from "react-native";

const PrimaryButton = ({ children }) => {
  function pressHandler() {
    console.log("Pressed!");
  }
  return (
    <View style={styles.btnOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.btnInnerContainer, styles.pressed]
            : styles.btnInnerContainer
        }
        onPress={pressHandler}
        android_ripple={{ color: "#ab47bc" }}
      >
        <Text style={styles.btnText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  btnOuterContainer: {
    borderRadius: 30,
    margin: 5,
    overflow: "hidden",
  },
  btnInnerContainer: {
    backgroundColor: "#6a1b9a",
    paddingHorizontal: 6,
    paddingVertical: 10,
    elevation: 5,
  },
  btnText: {
    color: "#FFFFFF",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
