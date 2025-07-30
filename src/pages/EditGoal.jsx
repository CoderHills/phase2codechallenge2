import { useParams, useOutletContext, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function EditGoal() {
  const { id } = useParams();
  const { goals, setGoals } = useOutletContext();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    const goal = goals.find(g => g.id === id);
    if (goal) setFormData(goal);
  }, [id, goals]);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:3000/goals/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    }).then(() => {
      setGoals(goals.map(g => g.id === id ? formData : g));
      navigate('/');
    });
  }

  if (!formData) return <h1>Loading...</h1>;

  return (
    <form className="goal-form" onSubmit={handleSubmit}>
      <input name="name" value={formData.name} onChange={handleChange} />
      <input name="category" value={formData.category} onChange={handleChange} />
      <input name="targetAmount" type="number" value={formData.targetAmount} onChange={handleChange} />
      <input name="deadline" type="date" value={formData.deadline} onChange={handleChange} />
      <button type="submit">Save Changes</button>
    </form>
  );
}

export default EditGoal;
