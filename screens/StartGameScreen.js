import { Alert, StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/colors";
import Title from "../components/Title";

function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  const numberInputHandler = (enteredText) => {
    setEnteredNumber(enteredText);
  };

  const resetInputHandler = () => {
    setEnteredNumber("");
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      // ...alert
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }

    onPickNumber(chosenNumber);
  };

  return (
    <View style={styles.inputContainer}>
      <Title>Guess My Number</Title>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        value={enteredNumber}
        placeholder="Type 2 digit number here"
        onChangeText={numberInputHandler}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 60,
    padding: 16,
    elevation: 8,
    // backgroundColor: "#70c3d5",
    // shadowRadius: 6,
    // shadowOpacity: 0.5,
    // shadowColor: "#129cb9",
    // shadowOffset: { width: 0, height: 4 },
    alignItems: "center",
  },
  numberInput: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 8,
    width: "100%",
    fontSize: 24,
    borderRadius: 8,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: Colors.border,
    color: Colors.dark,
  },
  buttonsContainer: { flexDirection: "row" },
  buttonContainer: {
    flex: 1,
  },
});
