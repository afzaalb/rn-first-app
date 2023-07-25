import { StyleSheet, ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { SafeAreaView } from "react-native";
import Colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";
import {
  useFonts,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [isGameOver, setIsGameOver] = useState(true);
  const [roundsNumber, setRoundsNumber] = useState(0);

  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
  });

  const pickNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setIsGameOver(false);
  };

  const gameOverHandler = (noOfRounds) => {
    setIsGameOver(true);
    setRoundsNumber(noOfRounds);
  };

  const startGameHandler = () => {
    setUserNumber(null);
    setIsGameOver(false);
    setRoundsNumber(0);
  };

  let screen = <StartGameScreen onPickNumber={pickNumberHandler} />;
  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} gameOverHandler={gameOverHandler} />
    );
  }

  if (isGameOver && userNumber) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        roundsNumber={roundsNumber}
        startGameHandler={startGameHandler}
      />
    );
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <StatusBar style="auto" />
        <LinearGradient
          colors={[Colors.primary300, Colors.primary500]}
          style={styles.rootScreen}
        >
          <ImageBackground
            resizeMode="cover"
            style={styles.rootScreen}
            imageStyle={styles.bgImg}
            source={require("./assets/splash.png")}
          >
            <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
          </ImageBackground>
        </LinearGradient>
      </>
    );
  }
}

const styles = StyleSheet.create({
  rootScreen: { flex: 1, backgroundColor: Colors.primary300 },
  bgImg: { opacity: 0.5 },
});
