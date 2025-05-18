export default function Stats({
  progressPresentage,
  totalCompletedTasks,
  totalTasks,
}) {
  return (
    <div className="stats-container">
      <div className="stats-details">
        <h1 className="stats-title">todo done</h1>
        <p className="stats-text">keep it up!</p>
        <div className="progress-bar">
          <div
            className="progress"
            style={{ width: `${progressPresentage}%` }}
          ></div>
        </div>
      </div>
      <div className="stats-numbers">
        <p>{totalCompletedTasks}</p>
        <p>/</p>
        <p>{totalTasks}</p>
      </div>
    </div>
  );
}
