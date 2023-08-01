import { View, Text } from "react-native";
import Button from "../components/UI/Button";

const RecentExpenses = ({ navigation }) => {
  return (
    <View>
      <Text>All RecentExpenses Screen</Text>
      <View style={{ flexDirection: "row" }}>
        <Button
          style={{ marginVertical: 15, marginHorizontal: 10, flex: 1 }}
          onPress={() => navigation.navigate("AllExpenses")}
          mode="flat"
        >
          Cancel
        </Button>
        <Button
          style={{ marginVertical: 15, marginHorizontal: 10, flex: 1 }}
          onPress={() => navigation.navigate("ManageExpense")}
        >
          Manage Expenses
        </Button>
      </View>
    </View>
  );
};

export default RecentExpenses;
