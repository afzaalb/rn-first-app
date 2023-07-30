import { StyleSheet, View, Text } from "react-native";

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome screen</Text>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
});
