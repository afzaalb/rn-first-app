import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";
import Colors from "./constants/colors";
import { Ionicons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerStyle: { backgroundColor: Colors.primary500 },
          headerTintColor: Colors.white,
          drawerActiveBackgroundColor: Colors.primary500,
          drawerActiveTintColor: "white",
          drawerStyle: { backgroundColor: Colors.primary300 },
          drawerInactiveTintColor: Colors.primary500,
        }}
      >
        <Drawer.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            drawerLabel: "Welcome Screen",
            drawerIcon: ({ color }) => (
              <Ionicons name="home" color={color} size={16} />
            ),
          }}
        />
        <Drawer.Screen
          name="User"
          component={UserScreen}
          options={{
            drawerLabel: "User Screen",
            drawerIcon: ({ color }) => (
              <Ionicons name="person" color={color} size={16} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
