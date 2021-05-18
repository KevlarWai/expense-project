import "./ExpenseForm.css";
import React, { useState } from "react";
import ExpenseCover from "./ExpenseCover";

const ExpenseForm = (props) => {

  const submitHandler = (expenseData) => {
    props.onSubmitExpenseData(expenseData);
  };


  return (
    <div>
      <ExpenseCover submitData={submitHandler}/>
    </div>
  );
};

export default ExpenseForm;
