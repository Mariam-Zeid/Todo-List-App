import { FiEdit3, FiTrash2 } from "react-icons/fi";

export default function TaskItem() {
  return (
    <div className="task-item">
      <div className="task checked">
        <div className="task-checkbox-container">
          <input
            type="checkbox"
            name="task"
            className="task-checkbox"
            checked
          />
          <label className="task-label"></label>
        </div>
        <p className="task-text">Learning React</p>
      </div>
      <div className="icons-container">
        <FiEdit3 className="edit-icon" />
        <FiTrash2 className="delete-icon" />
      </div>
    </div>
  );
}
