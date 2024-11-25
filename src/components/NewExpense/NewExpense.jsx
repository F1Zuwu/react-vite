import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const saveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  if (isOpen === true) {
    return (
      <div className="new-expense">
        <ExpenseForm
          onSaveExpenseData={(data) => saveExpenseData(data)}
          onClose={() => setIsOpen(false)}
        ></ExpenseForm>
      </div>
    );
  } else {
    return (
      <div className="new-expense">
        <button onClick={() => setIsOpen(true)}>Add New Expense</button>
      </div>
    );
  }
};

export default NewExpense;
