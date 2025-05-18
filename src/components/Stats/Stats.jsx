export default function Stats() {
  return (
    <div className="stats-container">
      <div className="stats-details">
        <h1 className="stats-title">todo done</h1>
        <p className="stats-text">keep it up!</p>
        <div className="progress-bar">
          <div
            className="progress"
            style={{ width: `100%` }}
          ></div>
        </div>
      </div>
      <div className="stats-numbers">
        <p>1</p>
        <p>/</p>
        <p>1</p>
      </div>
    </div>
  );
}
