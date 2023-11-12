import { Header } from "./components/Header";
import { TaskBoard } from "./components/TaskBoard";

import "./global.css";
import "./App.css"

function App() {
  return (
    <>
      <Header />
      <main className="taskApp">
        <TaskBoard />
      </main>
    </>
  );
}

export default App;
