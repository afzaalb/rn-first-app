import { StyleSheet, Text } from "react-native";
import Colors from "../constants/colors";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    color: Colors.royal,
    fontFamily: "Poppins_600SemiBold",
    fontSize: 28,
    marginBottom: 10,
  },
});
