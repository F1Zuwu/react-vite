import React, { useEffect, useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [data, setData] = useState(props.expenses);

  function filterByYear(data, year) {
    return data.filter((item) => {
      const date = item.date instanceof Date ? item.date : new Date(item.date);
      return date.getFullYear() === parseInt(year);
    });
  }

  const dateChangeHandeler = (option) => {
    const filteredData = filterByYear(props.expenses, option);

    setData(filteredData);
    console.log(filteredData.length);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        onDateChange={(option) => dateChangeHandeler(option)}
      ></ExpensesFilter>
      {data.length === 0 && (
        <p class="text-white text-center">No expenses found.</p>
      )}

      {data.length > 0 &&
        data.map((expense) => {
          return <ExpenseItem data={expense} key={expense.id}></ExpenseItem>;
        })}
    </Card>
  );
};

export default Expenses;
