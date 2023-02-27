import Expenses from "./components/Expenses";
import "./components/Expenses.css";

function App() {
  const expenses = [
    { id: "e1", title: "Car", amount: "233", date: new Date(2019, 12, 4) },
    { id: "e2", title: "Paper", amount: "33", date: new Date(2018, 3, 7) },
    { id: "e3", title: "Pen", amount: "23", date: new Date(2017, 5, 3) },
    { id: "e4", title: "Water", amount: "3", date: new Date(2022, 8, 8) },
  ];

  return (
    <div className="Expenses">
      <Expenses
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <Expenses
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <Expenses
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <Expenses
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
