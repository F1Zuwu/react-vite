import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredPrice: "",
    enteredDate: "",
  });

  const titleChangeHandeler = (event) => {
    setUserInput({
      ...userInput,
      enteredTitle: event.target.value,
    });
  };

  const priceChangeHandeler = (event) => {
    setUserInput({
      ...userInput,
      enteredPrice: event.target.value,
    });
  };
  const dateChangeHandeler = (event) => {
    setUserInput({
      ...userInput,
      enteredDate: event.target.value,
    });
  };

  const submitHandeler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: userInput.enteredTitle,
      price: userInput.enteredPrice,
      date: new Date(userInput.enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    setUserInput({
      ...userInput,
      enteredTitle: "",
      enteredPrice: "",
      enteredDate: "",
    });
  };

  return (
    <form onSubmit={(event) => submitHandeler(event)}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            value={userInput.enteredTitle}
            type="text"
            onChange={(e) => titleChangeHandeler(e)}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Price</label>
          <input
            value={userInput.enteredPrice}
            onChange={(e) => priceChangeHandeler(e)}
            type="number"
            min="0.01"
            step="0.01"
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={userInput.enteredDate}
            onChange={(e) => dateChangeHandeler(e)}
            type="date"
            min="2024-11-12"
            max="2026-01-31"
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button onClick={() => props.onClose()}>Cancel</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
