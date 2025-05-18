import TaskItem from "./TaskItem";

export default function TaskList() {
  // return (
  //   <div className="empty-list-container">
  //     <p className="empty-list">No Tasks Available</p>
  //   </div>
  // );
  return (
    <div className="task-list">
      <TaskItem />
    </div>
  );
}
