import { useOutletContext, useNavigate } from 'react-router-dom';
import GoalForm from '../components/GoalForm';

function AddGoal() {
  const { goals, setGoals } = useOutletContext();
  const navigate = useNavigate();

  function handleSave(newGoal) {
    fetch('http://localhost:3000/goals', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...newGoal, savedAmount: 0, createdAt: new Date().toISOString(), id: crypto.randomUUID() })
    })
    .then(r => r.json())
    .then(savedGoal => {
      setGoals([...goals, savedGoal]);
      navigate('/');
    });
  }

  return <GoalForm onSave={handleSave} />;
}

export default AddGoal;
