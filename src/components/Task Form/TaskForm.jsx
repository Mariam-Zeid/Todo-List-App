export default function TaskForm({ handleSubmit, task,setTask, editableId }) {
  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="write your task"
        className="task-input"
        onChange={(e) => setTask({ ...task, description: e.target.value })}
        value={task.description}
      />
      <button className="add-btn">{editableId !== null ? "✓" : "+"}</button>
    </form>
  );
}
