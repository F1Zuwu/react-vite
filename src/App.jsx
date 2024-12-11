import { useEffect, useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import ExpensesFilter from "./components/Expenses/ExpensesFilter";
import NewExpense from "./components/NewExpense/NewExpense";
import Error from "./UI/Error";

const App = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState({
    title: "Error",
    message: "Failed to fetch expense data, please try again later.",
  });
  const [showError, setShowError] = useState(false);
  const [expenses, setExpenses] = useState([]);

  const getExpenses = async () => {
    setIsFetching(true);
    try {
      const response = await fetch("http://localhost:3005/expenses");
      const responseData = await response.json();
      if (!response.ok) {
        throw new Error("failed fetching data.");
      }
      setExpenses(responseData.expenses);
    } catch (error) {
      setError({
        title: "An error occured!",
        message: "Failed fetching expenses data, please try again later.",
      });
      setShowError(true);
    }

    setIsFetching(false);
  };

  const errorHandler = () => {
    setShowError(false);
    setError(null);
  };

  useEffect(
    () => async () => {
      getExpenses();
    },
    []
  );

  const addExpenseHandeler = async (expense) => {
    try {
      const response = await fetch("http://localhost:3005/add-expense", {
        method: "POST",
        body: JSON.stringify(expense),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const responseData = await response.json();
      if (!response.ok) {
        throw new Error("Failed saving data");
      }
      setExpenses([expense, ...expenses]);
    } catch (error) {
      setError({
        title: "An error occured!",
        message: "Failed saving expenses data, please try again.",
      });
    }
  };

  return (
    <div className="App">
      {showError && (
        <Error
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <NewExpense
        onAddExpense={(event) => addExpenseHandeler(event)}
      ></NewExpense>
      <Expenses expenses={expenses} isLoading={isFetching} />
    </div>
  );
};

export default App;
