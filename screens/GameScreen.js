import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Title from "../components/Title";
import { useEffect, useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
import Colors from "../constants/colors";

const generateRandomBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

let minBoundary = 1,
  maxBoundary = 100;

function GameScreen({ userNumber, gameOverHandler }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie", "You know that this is wrong...", [
        {
          text: "Okay",
          style: "cancel",
        },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    console.log(minBoundary, maxBoundary);
    const newRndNum = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNum);
    setGuessRounds((previousRounds) => [newRndNum, ...previousRounds]);
  };

  useEffect(() => {
    if (currentGuess === userNumber) {
      gameOverHandler(guessRounds.length);
    }
  }, [currentGuess, userNumber, gameOverHandler]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  return (
    <View style={styles.inputContainer}>
      <Title>Opponent's Guess</Title>
      <Text>{currentGuess}</Text>
      <Text>Higher or lower?</Text>
      <View style={styles.btnContainer}>
        <PrimaryButton onPress={() => nextGuessHandler("lower")}>
          <Ionicons name="remove-circle" size={24} />
        </PrimaryButton>
        <PrimaryButton onPress={() => nextGuessHandler("higher")}>
          <Ionicons name="add-circle" size={24} />
        </PrimaryButton>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <View style={styles.roundContainer}>
              <Text style={{ color: Colors.white }}>
                #{guessRounds.length - itemData.index} - Opponent's guess:
              </Text>
              <Text style={{ color: Colors.white }}>{itemData.item}</Text>
            </View>
          )}
          keyExtractor={(item) => item}
        />
        <Text>Log Rounds</Text>
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    padding: 12,
    alignItems: "center",
  },
  listContainer: {},
  btnContainer: { flexDirection: "row" },
  roundContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 8,
    padding: 8,
    backgroundColor: Colors.primary500,
    borderRadius: 6,
  },
});
