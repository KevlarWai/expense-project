import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "Car Insurance",
      amount: 406.83,
      date: new Date(2021, 7, 1),
    },
    {
      id: "e3",
      title: "New Computer",
      amount: 2500,
      date: new Date(2021, 1, 15),
    },
    {
      id: "e4",
      title: "New Desk (wooden)",
      amount: 84.27,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      <h2>Let's get started now!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
