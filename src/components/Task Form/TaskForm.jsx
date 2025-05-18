export default function TaskForm() {
  return (
    <form className="task-form">
      <input
        type="text"
        placeholder="write your task"
        className="task-input"
      />
      <button className="add-btn">+</button>
    </form>
  );
}
