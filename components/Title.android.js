import { StyleSheet, Text, useWindowDimensions } from "react-native";
import Colors from "../constants/colors";

const Title = ({ children }) => {
  const { width } = useWindowDimensions();

  const fontSize = width < 420 ? 24 : 28;
  const marginBottom = width < 420 ? 10 : 20;

  return (
    <Text style={[styles.title, { fontSize, marginBottom }]}>{children}</Text>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    color: Colors.royal,
    fontFamily: "Poppins_600SemiBold",
  },
});
