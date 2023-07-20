import { useState } from "react";
import {
  Button,
  StyleSheet,
  TextInput,
  View,
  Modal,
  Image,
} from "react-native";

const GoalInput = (props) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const onAddHandler = () => {
    props.addGoalHandler(enteredGoalText);
    setEnteredGoalText("");
  };

  return (
    <Modal visible={props.modalVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require("../assets/icon.png")} />
        <TextInput
          style={styles.textInput}
          value={enteredGoalText}
          placeholder="Add your goal here"
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <Button title="Add goal" onPress={onAddHandler} />
          <Button title="Cancel" onPress={props.toggleModalHandler} />
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    marginHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#adadad",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#adadad",
    width: "100%",
    padding: 12,
    fontSize: 16,
    borderRadius: 8,
  },
  buttonContainer: { flexDirection: "row", gap: 20, marginVertical: 10 },
  image: { width: 100, height: 100, borderRadius: 50, marginBottom: 24 },
});
