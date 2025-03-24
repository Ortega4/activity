import "./styles.css";
import Header from "./components/Header";
import GoalList from "./components/GoalList";

export default function App() {
  return (
    <div className="App">
      <Header />
      <GoalList />
    </div>
  );
}
