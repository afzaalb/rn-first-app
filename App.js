import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "./constants/colors";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";

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
          <Stack.Navigator>
            <Stack.Screen name="MealsCategories" component={CategoriesScreen} />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
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
