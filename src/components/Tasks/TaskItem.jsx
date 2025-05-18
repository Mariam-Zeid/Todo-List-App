import { FiEdit3, FiTrash2 } from "react-icons/fi";

export default function TaskItem({
  index,
  task,
  handleTaskStatus,
  handleEditTask,
  handleDeleteTask,
}) {
  return (
    <div className="task-item">
      <div className={task.isDone ? "task checked" : "task"}>
        <div className="task-checkbox-container">
          <input
            type="checkbox"
            name="task"
            id={`task-${index}`}
            checked={task.isDone}
            className="task-checkbox"
            onChange={() => handleTaskStatus(index)}
          />
          <label htmlFor={`task-${index}`} className="task-label"></label>
        </div>
        <p className="task-text">{task.description}</p>
      </div>
      <div className="icons-container">
        <FiEdit3 onClick={() => handleEditTask(index)} className="edit-icon" />
        <FiTrash2
          onClick={() => handleDeleteTask(index)}
          className="delete-icon"
        />
      </div>
    </div>
  );
}
