import { Fragment, useRef, useState } from "react";
import "./ExpenseForm.css";
import Error from "../../UI/Error";

const ExpenseForm = (props) => {
  const [error, setError] = useState(null);

  const titleInputRef = useRef();
  const amountInputRef = useRef();
  const dateInputRef = useRef();

  const errorHandler = () => {
    setError(null);
  };

  const submitHandeler = (event) => {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredAmount = amountInputRef.current.value;
    const enteredDate = dateInputRef.current.value;

    if (
      enteredTitle.trim().length == 0 ||
      enteredAmount.trim().length == 0 ||
      enteredDate.trim().length == 0
    ) {
      setError({
        title: "Invalid input",
        message:
          "Please enter a valid title or amount or date (do not leave any fields empty)",
      });
      return;
    }

    const expenseData = {
      title: enteredTitle,
      price: enteredAmount,
      date: new Date(enteredDate),
    };

    console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    props.onClose();
    titleInputRef.current.value = "";
    amountInputRef.current.value = "";
    dateInputRef.current.value = "";
  };

  return (
    <Fragment>
      {error && (
        <Error
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <div>
        <form onSubmit={(event) => submitHandeler(event)}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input type="text" ref={titleInputRef}></input>
            </div>
            <div className="new-expense__control">
              <label>Price</label>
              <input
                type="number"
                min="0.01"
                step="0.01"
                ref={amountInputRef}
              ></input>
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
                type="date"
                min="2024-11-12"
                max="2026-01-31"
                ref={dateInputRef}
              ></input>
            </div>
          </div>
          <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
            <button onClick={() => props.onClose()}>Cancel</button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default ExpenseForm;
