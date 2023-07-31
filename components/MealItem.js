import { useNavigation } from "@react-navigation/native";
import {
  Pressable,
  View,
  Text,
  ImageBackground,
  StyleSheet,
} from "react-native";
import Colors from "../constants/colors";

const MealItem = ({ itemData }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.itemContainer}>
      <Pressable
        style={styles.gridItem}
        android_ripple={{ color: Colors.ripple }}
        onPress={() =>
          navigation.navigate("MealDetails", {
            mealId: itemData.item.id,
          })
        }
      >
        <ImageBackground
          resizeMode="cover"
          style={styles.imgContainer}
          imageStyle={styles.img}
          source={{ uri: itemData.item.image }}
        >
          <Text style={styles.overText}>{itemData.item.title}</Text>
        </ImageBackground>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  itemContainer: { flex: 1 },
  gridItem: {
    flex: 1,
    marginTop: 16,
    marginHorizontal: 16,
    height: 160,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  imgContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    position: "relative",
    elevation: 4,
    shadowColor: "#cccccc",
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowOffset: { width: 6, height: 6 },
  },
  img: {
    borderRadius: 16,
  },
  overText: {
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 6,
    paddingHorizontal: 12,
    color: "#fff",
    marginVertical: 10,
    marginHorizontal: 16,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    borderRadius: 16,
    overflow: "hidden",
  },
});
