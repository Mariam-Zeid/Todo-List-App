import TaskItem from "./TaskItem";

export default function TaskList({
  tasks,
  handleTaskStatus,
  handleEditTask,
  handleDeleteTask,
}) {
  if (!tasks.length) {
    return (
      <div className="empty-list-container">
        <p className="empty-list">No Tasks Available</p>
      </div>
    );
  }
  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          index={index}
          task={task}
          handleTaskStatus={handleTaskStatus}
          handleEditTask={handleEditTask}
          handleDeleteTask={handleDeleteTask}
        />
      ))}
    </div>
  );
}
