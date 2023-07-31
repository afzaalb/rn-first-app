import MealItem from "./MealItem";
import { View, FlatList, StyleSheet } from "react-native";

const MealsList = ({ data }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => {
          return <MealItem itemData={itemData} />;
        }}
        numColumns={2}
      />
    </View>
  );
};

export default MealsList;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
