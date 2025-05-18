import { useState } from "react";
import Stats from "./components/Stats/Stats";
import TaskForm from "./components/Task Form/TaskForm";
import TaskList from "./components/Tasks/TaskList";

export default function App() {
  const [task, setTask] = useState({
    description: "",
    isDone: false,
  });
  const [editableId, setEditableId] = useState(null);

  const [tasks, setTasks] = useState(() =>
    localStorage.getItem("todoTasks")
      ? JSON.parse(localStorage.getItem("todoTasks"))
      : []
  );

  const totalTasks = tasks.length;
  const totalCompletedTasks = tasks.filter(
    (task) => task.isDone === true
  ).length;
  const progressPresentage = (totalCompletedTasks / totalTasks) * 100 || 0;

  // new state depends on the current state (CallbackFn)
  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
    localStorage.setItem("todoTasks", JSON.stringify([...tasks, newTask]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.description) return;

    if (editableId !== null) {
      // Fix: Ensure we're checking if editableId is not null instead of truthy check
      setTasks((prevTasks) => {
        const updatedTasks = prevTasks.map((prevTask, index) =>
          index === editableId ? { ...prevTask, ...task } : prevTask
        );
        console.log(updatedTasks);
        localStorage.setItem("todoTasks", JSON.stringify(updatedTasks));
        return updatedTasks;
      });
      // Clear edit mode after successful edit
      setEditableId(null);
    } else {
      const newTask = {
        description: task.description,
        isDone: false,
      };
      handleAddTask(newTask);
    }

    setTask({
      description: "",
      isDone: false,
    });
  };

  const handleTaskStatus = (index) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((task, i) =>
        i === index ? { ...task, isDone: !task.isDone } : task
      );
      localStorage.setItem("todoTasks", JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };

  const handleEditTask = (index) => {
    const taskToEdit = tasks[index];
    setTask({ ...taskToEdit });
    setEditableId(index);
  };

  const handleDeleteTask = (index) => {
    setTasks((prevTasks) => {
      const filteredTasks = prevTasks.filter((_, i) => i !== index);
      localStorage.setItem("todoTasks", JSON.stringify(filteredTasks));
      return filteredTasks;
    });

    // If we're deleting the task we're currently editing, reset edit mode
    if (editableId === index) {
      setEditableId(null);
      setTask({ description: "", isDone: false });
    }
  };

  return (
    <div className="container">
      <Stats
        progressPresentage={progressPresentage}
        totalCompletedTasks={totalCompletedTasks}
        totalTasks={totalTasks}
      />
      <TaskForm
        handleSubmit={handleSubmit}
        task={task}
        setTask={setTask}
        editableId={editableId}
      />
      <TaskList
        tasks={tasks}
        handleTaskStatus={handleTaskStatus}
        handleEditTask={handleEditTask}
        handleDeleteTask={handleDeleteTask}
      />
    </div>
  );
}
