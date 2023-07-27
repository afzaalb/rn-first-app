import { StyleSheet, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "./constants/colors";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <LinearGradient
        colors={[Colors.primary300, Colors.primary500]}
        style={styles.rootScreen}
      >
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: Colors.primary300 },
              headerTintColor: Colors.dark,
              contentStyle: { backgroundColor: Colors.white },
            }}
          >
            <Stack.Screen
              name="MealsCategories"
              component={CategoriesScreen}
              options={{
                title: "All Categories",
              }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
              options={{
                title: "Category Meals",
              }}
            />
            <Stack.Screen
              name="MealDetails"
              component={MealDetailsScreen}
              options={{
                // These options can be overridden if these are defined within the Screen as well
                // In this case headerRight options is defined in MealDetailsScreen hence you'll
                // not be able to see the Head Right Text below
                headerRight: () => <Text>Head Right</Text>,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: Colors.primary300,
  },
  bgImg: { opacity: 0.5 },
});
