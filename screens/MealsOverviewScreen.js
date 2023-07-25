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
        renderItem={(itemData) => (
          <View style={styles.gridItem}>
            <ImageBackground source={itemData.item.image} resizeMode="cover" />
            <Text>{itemData.item.title}</Text>
          </View>
        )}
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
    borderRadius: 12,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
});
