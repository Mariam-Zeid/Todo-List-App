import { useState } from "react";
import Stats from "./components/Stats/Stats";
import TaskForm from "./components/Task Form/TaskForm";
import TaskList from "./components/Tasks/TaskList";
import { useLocalStorage } from "./hooks/useLocalStorage";

export default function App() {
  // const [tasks, setTasks] = useState(() =>
  //   localStorage.getItem("todoTasks")
  //     ? JSON.parse(localStorage.getItem("todoTasks"))
  //     : []
  // );

  const [tasks, setTasks] = useLocalStorage({
    key: "todoTasks",
    defaultValue: [],
  });
  const [task, setTask] = useState({
    description: "",
    isDone: false,
  });
  const [editableId, setEditableId] = useState(null);

  const totalTasks = tasks.length;
  const totalCompletedTasks = tasks.filter(
    (task) => task.isDone === true
  ).length;
  const progressPresentage = (totalCompletedTasks / totalTasks) * 100 || 0;

  // new state depends on the current state (CallbackFn)
  const handleAddTask = (newTask) =>
    setTasks((prevTasks) => [...prevTasks, newTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.description) return;

    if (editableId !== null) {
      // Fix: Ensure we're checking if editableId is not null instead of truthy check
      setTasks((prevTasks) =>
        prevTasks.map((prevTask, index) =>
          index === editableId ? { ...prevTask, ...task } : prevTask
        )
      );
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
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  const handleEditTask = (index) => {
    const taskToEdit = tasks[index];
    setTask({ ...taskToEdit });
    setEditableId(index);
  };

  const handleDeleteTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));

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
