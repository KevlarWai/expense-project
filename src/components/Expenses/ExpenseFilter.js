import "./ExpenseFilter.css";
import React from "react";

const ExpenseFilter = (props) => {

  const filterYearHandler = (event) => {
    //console.log(event.target.value);
    //selectFilterYear(event.target.value);
    props.onChangeFilter(event.target.value);
    //console.log(filterYear);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected}onChange={filterYearHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
