import "./ExpenseForm.css";
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
