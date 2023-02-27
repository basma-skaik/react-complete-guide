import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { id: "e1", title: "Car", amount: "233", date: new Date(2019, 3, 4) },
    { id: "e2", title: "Paper", amount: "33", date: new Date(2019, 3, 7) },
    { id: "e3", title: "Pen", amount: "23", date: new Date(2019, 3, 3) },
    { id: "e4", title: "Water", amount: "3", date: new Date(2019, 3, 8) },
  ];

  return (
    <div>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
