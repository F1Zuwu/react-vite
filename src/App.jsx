import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import ExpensesFilter from "./components/Expenses/ExpensesFilter";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const DUMMY_EXPENSES = [
    {
      id: "id1",
      date: new Date(2023, 10, 12),
      title: "New book",
      price: 30.99,
    },
    {
      id: "id2",
      date: new Date(2024, 10, 12),
      title: "New Jeans",
      price: 99.99,
    },
    {
      id: "id3",
      date: new Date(2025, 10, 12),
      title: "New bag",
      price: 99.99,
    },
  ];

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandeler = (expense) => {
    setExpenses((previousExpenses) => {
      return [expense, ...previousExpenses];
    });
  };

  return (
    <div className="App">
      <NewExpense
        onAddExpense={(event) => addExpenseHandeler(event)}
      ></NewExpense>
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
