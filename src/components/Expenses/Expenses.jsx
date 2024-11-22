import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [dateFilter, setDateFilter] = useState("");

  const dateChangeHandeler = (option) => {
    setDateFilter(option);
    console.log("Year date in Expenses.jsx" + option);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        onDateChange={(option) => dateChangeHandeler(option)}
      ></ExpensesFilter>
      <ExpenseItem data={props.expenses[0]}></ExpenseItem>
      <ExpenseItem data={props.expenses[1]}></ExpenseItem>
    </Card>
  );
};

export default Expenses;
