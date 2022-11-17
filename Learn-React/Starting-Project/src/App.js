import DisplayExpense from "./components/DisplayExpenses";


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

  return (
    <div>
      <h2>Let's get started!</h2>
      <DisplayExpense expenses={expenses}/>
    </div>
  );
}

export default App;
