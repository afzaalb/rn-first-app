import { View, Text, Image, Pressable } from "react-native";
import { MEALS } from "../data/dummy-data";
import { useContext, useLayoutEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorites";

const MealDetailsScreen = ({ route, navigation }) => {
  const { mealId } = route.params;
  const { title, image } = MEALS.find((meal) => meal.id === mealId);
  // const favoriteMealsContext = useContext(FavoritesContext);

  const dispatch = useDispatch();
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const isMealFavorite = favoriteMealIds.includes(mealId);

  const changeFavoriteStatusHandler = () => {
    if (isMealFavorite) {
      // favoriteMealsContext.removeFavorite(mealId);
      dispatch(removeFavorite({ id: mealId }));
    } else {
      // favoriteMealsContext.addFavorite(mealId);
      dispatch(addFavorite({ id: mealId }));
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable onPress={changeFavoriteStatusHandler}>
          <Ionicons name={isMealFavorite ? "star" : "star-outline"} size={20} />
        </Pressable>
      ),
    });
  }, [navigation, isMealFavorite]);

  return (
    <View>
      <Image source={{ uri: image }} style={{ width: "100%", height: 240 }} />
      <Text
        style={{
          padding: 10,
          fontSize: 22,
          fontWeight: 600,
        }}
      >
        Meal Details
      </Text>
      <Text
        style={{
          paddingHorizontal: 10,
        }}
      >
        Meal ID:{mealId}
      </Text>
      <Text
        style={{
          paddingHorizontal: 10,
        }}
      >
        Meal Name:{title}
      </Text>
    </View>
  );
};

export default MealDetailsScreen;
