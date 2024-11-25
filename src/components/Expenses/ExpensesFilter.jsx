import React, { useEffect } from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const onDateChange = (e) => {
    props.onDateChange(e.target.value);
  };

  useEffect(() => {
    document.getElementById("select").value = "2024";
    props.onDateChange(2024);
  }, []);

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select id="select" onChange={(e) => onDateChange(e)}>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
