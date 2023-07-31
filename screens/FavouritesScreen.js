import { useContext } from "react";
import MealsList from "../components/MealsList";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const FavouritesScreen = () => {
  const favoriteMealsContext = useContext(FavoritesContext);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealsContext.ids.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Ionicons name="alert-circle-outline" size={48} />
        <Text style={{ marginTop: 15, fontSize: 18, fontWeight: 500 }}>
          You have no favorite meals!
        </Text>
      </View>
    );
  }

  return <MealsList data={favoriteMeals} />;
};

export default FavouritesScreen;
