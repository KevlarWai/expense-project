import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, { useState } from "react";

const InitialExpense = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "Car Insurance",
    amount: 406.83,
    date: new Date(2021, 7, 1),
  },
  {
    id: "e3",
    title: "New Computer",
    amount: 2500,
    date: new Date(2021, 1, 15),
  },
  {
    id: "e4",
    title: "New Desk (wooden)",
    amount: 84.27,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(InitialExpense);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <h2>Let's get started now!</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
