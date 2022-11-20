import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

import {useState} from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e2",
    title: "Toilet Paper",
    amount: 94.67,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e3",
    title: "New TV",
    amount: 694.67,
    date: new Date(2021, 5, 28),
  },
  {
    id: "e4",
    title: "New Desk",
    amount: 294.67,
    date: new Date(2021, 6, 28),
  },
];

function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler= (expense) => {
    console.log("In App.js");
    console.log(expense);
    //const newExpense = [expense, ...expenses];

    setExpenses((prevExpenses) => {return [expense,...prevExpenses]});
  }

  console.log(expenses);

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
