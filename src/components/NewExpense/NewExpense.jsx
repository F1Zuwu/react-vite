import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const saveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div class="new-expense">
      <ExpenseForm
        onSaveExpenseData={(data) => saveExpenseData(data)}
      ></ExpenseForm>
    </div>
  );
};

export default NewExpense;
