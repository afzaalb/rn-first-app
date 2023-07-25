import {
  FlatList,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import Colors from "../constants/colors";
import { useNavigation } from "@react-navigation/native";

function renderCategoryItem(item, navigate) {
  const pressHandler = () => {
    navigate("MealsOverview", {
      categoryId: item.id,
      categoryName: item.title,
    });
  };

  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: Colors.border }}
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: item.color },
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={pressHandler}
      >
        <View style={[styles.innerContainer]}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const CategoriesScreen = () => {
  const { navigate } = useNavigation();

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => renderCategoryItem(itemData.item, navigate)}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    marginTop: 16,
    marginHorizontal: 16,
    height: 120,
    borderRadius: 12,
    elevation: 2,
    backgroundColor: Colors.white,
    shadowColor: Colors.dark,
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: { flex: 1, borderRadius: 12 },
  buttonPressed: { opacity: 0.5 },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
  },
});
