import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

function ExpensesList(props) {

  if (props.item.length === 0) {
    return <h2 className="fallback">No Content Found!</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.item.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </ul>
  );
}

export default ExpensesList;
