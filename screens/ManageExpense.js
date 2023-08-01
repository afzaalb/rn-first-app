import { Text, View } from "react-native";
import Button from "../components/UI/Button";

const ManageExpense = ({ navigation }) => {
  return (
    <View>
      <Button
        style={{ marginVertical: 15, marginHorizontal: 10 }}
        onPress={() => navigation.navigate("ManageExpense")}
      >
        Manage Expenses
      </Button>
      <Text>All ManageExpense Screen</Text>
    </View>
  );
};

export default ManageExpense;
