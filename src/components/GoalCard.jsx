import { Link } from 'react-router-dom';

function GoalCard({ goal, onDelete }) {
  const progress = (goal.savedAmount / goal.targetAmount) * 100;

  return (
    <div className="goal-card">
      <h2>{goal.name}</h2>
      <p>Category: {goal.category}</p>
      <p>Target: ${goal.targetAmount}</p>
      <p>Saved: ${goal.savedAmount}</p>
      <div className="progress-bar">
        <div style={{ width: `${progress}%` }}></div>
      </div>
      <Link to={`/edit/${goal.id}`}><button>Edit</button></Link>
      <button onClick={() => onDelete(goal.id)}>Delete</button>
    </div>
  );
}

export default GoalCard;
