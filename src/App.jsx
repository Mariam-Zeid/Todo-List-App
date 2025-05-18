import Stats from "./components/Stats/Stats";
import TaskForm from "./components/Task Form/TaskForm";
import TaskList from "./components/Tasks/TaskList";

export default function App() {
  return (
    <div className="container">
      <Stats />
      <TaskForm />
      <TaskList />
    </div>
  );
}
