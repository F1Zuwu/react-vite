import Expenses from "./components/Expenses/Expenses";
import ExpensesFilter from "./components/Expenses/ExpensesFilter";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      date: new Date(2024, 10, 12),
      title: "New book",
      price: 30.99,
    },
    {
      date: new Date(2024, 10, 12),
      title: "New Jeans",
      price: 99.99,
    },
  ];

  const addExpenseHandeler = (expense) => {
    console.log("in App.jsx");
    console.log(expense);
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
