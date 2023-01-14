import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenses Found.</h2>;
  }

  const deleteHandler = (id) =>{
    props.onDelete(id);
  };




  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <div key={expense.id}>
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
          <button className="delete-button" onClick={()=>deleteHandler(expense.id)}>
        Delete
      </button>
        </div>
      ))}
    </ul>
  );
};

export default ExpensesList;
