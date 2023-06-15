import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import Card from "./Card";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [year, setYear] = useState("2020"); // Expenses of 2020 will be shown when page first loads.

  const yearGetterHandler = (year) => {
    setYear(year);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter selected={year} onYearGetter={yearGetterHandler} />

        <ExpensesChart expenses={filteredExpenses} />

        <ExpensesList items={filteredExpenses} />

        {/* TECHNIQUE 3 */}
        {/* {expenseContent} */}

        {/* TECHNIQUE 2 */}
        {/* Awesome technique(can be used instead of ternary operator)*/}
        {/* {filteredExpenses.length === 0 && <p>No expenses found.</p>}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((expenses) => (
            <ExpenseItem
              key={expenses.id}
              title={expenses.title}
              amount={expenses.amount}
              date={expenses.date}
            />
          ))} */}

        {/* TECHNIQUE 1 */}
        {/* {filteredExpenses.length === 0 ? (
          <p>No expenses found.</p>
        ) : (
          filteredExpenses.map((expenses) => (
            <ExpenseItem
              key={expenses.id}
              title={expenses.title}
              amount={expenses.amount}
              date={expenses.date}
            />
          ))
        )} */}
      </Card>
    </li>
  );
}

export default Expenses;

//                     NOTES
// -> Try to put logic outside of return statement.Card
// -> Technique3 >= Technique2 > Technique1
