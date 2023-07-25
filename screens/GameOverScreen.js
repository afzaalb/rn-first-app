import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";
import PrimaryButton from "../components/PrimaryButton";

function GameOverScreen({ roundsNumber, userNumber, startGameHandler }) {
  return (
    <View style={styles.container}>
      <Title>Game Over</Title>
      <Image style={styles.img} source={require("../assets/icon.png")} />
      <Text style={styles.textContainer}>
        You need{" "}
        <Text style={{ fontFamily: "Poppins_600Semibold" }}>
          {roundsNumber}
        </Text>{" "}
        attempts to guess the number{" "}
        <Text style={{ fontFamily: "Poppins_600Semibold" }}>{userNumber}</Text>.
      </Text>
      <PrimaryButton style={styles.btn} onPress={startGameHandler}>
        Start New Game
      </PrimaryButton>
    </View>
  );
}

export default GameOverScreen;

const deviceWidth = Dimensions.get("window").width;
const imgSize = deviceWidth > 420 ? 200 : 120;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  img: {
    width: imgSize,
    height: imgSize,
    borderRadius: 200,
  },
  textContainer: { marginVertical: 20 },
});
