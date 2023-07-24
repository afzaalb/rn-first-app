import { Text, View, Pressable, StyleSheet } from "react-native";
import Colors from "../constants/colors";

function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.innerContainer, styles.pressed]
            : styles.innerContainer
        }
        onPress={onPress}
        android_ripple={{ color: Colors.ripple }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonContainer: { borderRadius: 6, margin: 4, overflow: "hidden" },
  innerContainer: {
    backgroundColor: Colors.primary500,
    height: 40,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  buttonText: {
    color: Colors.white,
    fontFamily: "Poppins_500Medium",
    textAlign: "center",
    lineHeight: 24,
  },
  pressed: { opacity: 0.75 },
});
