import {
  FlatList,
  StyleSheet,
  View,
  Text,
  Platform,
  ImageBackground,
} from "react-native";
import { MEALS } from "../data/dummy-data";

const MealsOverviewScreen = ({ route }) => {
  const { categoryId } = route.params;
  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(categoryId) >= 0;
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => {
          return (
            <View style={styles.gridItem}>
              <ImageBackground
                resizeMode="cover"
                style={styles.imgContainer}
                imageStyle={styles.img}
                source={{ uri: itemData.item.image }}
              >
                <Text style={styles.overText}>{itemData.item.title}</Text>
              </ImageBackground>
            </View>
          );
        }}
        numColumns={2}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
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
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});
