import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const yearFilterHandler = (event) => {
    props.onYearGetter(event.target.value);
  };

  const date = new Date();

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={yearFilterHandler}>
          <option>{date.getFullYear() - 1}</option>
          <option>{date.getFullYear() - 2}</option>
          <option>{date.getFullYear() - 3}</option>
          <option>{date.getFullYear() - 4}</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
