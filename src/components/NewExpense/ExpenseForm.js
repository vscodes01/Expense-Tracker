import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [formShown, setFormShown] = useState(false);

  const formStateHandler = () => {
    setFormShown(!formShown);

    // setting all input fields back to empty.
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    // It will return amount as a string.
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    // It will return date as a string.
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    // We don't want our page to get refreshed after clicking button.
    // onSubmit={} make page refresh.
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount, // '+' for changing string into number.
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    // setting all input fields back to empty.
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");

    // For removing form when new expense added successfully.
    setFormShown(!formShown);
  };

  if (formShown === false) {
    return (
      <div className="new-expense__controls">
        <button onClick={formStateHandler}>Add New Expense</button>
      </div>
    );
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle} // This is two-way-binding.
            onChange={titleChangeHandler}
          />
        </div>

        <div className="new-expense__controls">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount} // This is two-way-binding.
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__controls">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate} // This is two-way-binding.
            onChange={dateChangeHandler}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button onClick={formStateHandler}>Cancel</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
