import { useOutletContext } from 'react-router-dom';
import GoalCard from '../components/GoalCard';
import DepositForm from '../components/DepositForm';
import Overview from '../components/Overview';

function Home() {
  const { goals, setGoals } = useOutletContext();

  function handleDelete(id) {
    fetch(`http://localhost:3000/goals/${id}`, { method: 'DELETE' })
      .then(() => setGoals(goals.filter(goal => goal.id !== id)));
  }

  function handleDeposit(goalId, amount) {
    const goal = goals.find(g => g.id === goalId);
    const updatedAmount = goal.savedAmount + amount;

    fetch(`http://localhost:3000/goals/${goalId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ savedAmount: updatedAmount })
    }).then(() => {
      setGoals(goals.map(g => g.id === goalId ? { ...g, savedAmount: updatedAmount } : g));
    });
  }

  return (
    <div>
      <Overview goals={goals} />
      {goals.map(goal => (
        <div key={goal.id}>
          <GoalCard goal={goal} onDelete={handleDelete} />
          <DepositForm goalId={goal.id} onDeposit={handleDeposit} />
        </div>
      ))}
    </div>
  );
}

export default Home;
