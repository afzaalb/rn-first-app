import { StyleSheet, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "./constants/colors";
import CategoriesScreen from "./screens/CategoriesScreen";
import FavouritesScreen from "./screens/FavouritesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
// import FavoritesContextProvider from "./store/context/favorites-context";
import { Provider } from "react-redux";
import { store } from "./store/redux/store";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary300 },
        headerTintColor: Colors.dark,
        sceneContainerStyle: { backgroundColor: Colors.white },
        drawerContentStyle: { backgroundColor: Colors.primary300 },
        drawerActiveTintColor: Colors.primary500,
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ size, color }) => {
            return <Ionicons name="list" size={size} color={color} />;
          },
        }}
      />
      <Drawer.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={{
          drawerIcon: ({ size, color }) => {
            return <Ionicons name="star" size={size} color={color} />;
          },
        }}
      />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <LinearGradient
        colors={[Colors.primary300, Colors.primary500]}
        style={styles.rootScreen}
      >
        {/* <FavoritesContextProvider> */}
        <Provider store={store}>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerStyle: { backgroundColor: Colors.primary300 },
                headerTintColor: Colors.dark,
                contentStyle: { backgroundColor: Colors.white },
              }}
            >
              <Stack.Screen
                name="DrawerScreen"
                component={DrawerNavigator}
                options={{ headerShown: false }}
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
        </Provider>
        {/* </FavoritesContextProvider> */}
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
