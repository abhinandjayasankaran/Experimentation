import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
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

  const addExpenseHandler= (expense) => {
    console.log("In App.js");
    console.log(expense);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
