import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModalHandler = () => {
    setModalVisible((pre) => !pre);
  };

  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals((previousCourseGoals) => [
      ...previousCourseGoals,
      {
        text: enteredGoalText,
        key: Math.random().toString(),
        id: Math.random().toString(),
      },
    ]);
    toggleModalHandler();
  };

  const deleteGoalHandler = (id) => {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  };

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#129cb9"
          onPress={toggleModalHandler}
        />

        <GoalInput
          modalVisible={modalVisible}
          toggleModalHandler={toggleModalHandler}
          addGoalHandler={addGoalHandler}
        />

        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  deleteGoalHandler={() => deleteGoalHandler(itemData.item.id)}
                />
              );
            }}
            keyExtractor={(item, index) => item.id}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: { paddingTop: 60, paddingHorizontal: 16, flex: 1 },
  goalsContainer: {
    flex: 5,
  },
});
