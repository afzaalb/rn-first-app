import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItem = (props) => {
  return (
    <Pressable
      onPress={props.deleteGoalHandler}
      android_ripple={{ color: "#adadad" }}
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    borderRadius: 6,
    backgroundColor: "#129cb9",
    padding: 12,
    marginVertical: 8,
  },
  pressedItem: { opacity: 0.5 },
  goalText: { fontSize: 14, letterSpacing: 2, textTransform: "uppercase" },
});
