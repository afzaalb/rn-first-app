import { View } from "react-native";
import ExpenseList from "./ExpenseList";
import ExpenseSummary from "./ExpenseSummary";

const ExpensesOutput = ({ expenses }) => {
  return (
    <View>
      <ExpenseSummary />
      <ExpenseList />
    </View>
  );
};

export default ExpensesOutput;
