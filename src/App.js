import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    { id: "e1", title: "Car", amount: "233", date: new Date(2019, 12, 4) },
    { id: "e2", title: "Paper", amount: "33", date: new Date(2018, 3, 7) },
    { id: "e3", title: "Pen", amount: "23", date: new Date(2017, 5, 3) },
    { id: "e4", title: "Water", amount: "3", date: new Date(2022, 8, 8) },
  ];

  return <Expenses items={expenses} />;
};

export default App;
