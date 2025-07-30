import { useState } from 'react';

function GoalForm({ onSave }) {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    targetAmount: '',
    deadline: ''
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSave(formData);
  }

  return (
    <form className="goal-form" onSubmit={handleSubmit}>
      <input name="name" placeholder="Goal Name" onChange={handleChange} required />
      <input name="category" placeholder="Category" onChange={handleChange} required />
      <input name="targetAmount" type="number" placeholder="Target Amount" onChange={handleChange} required />
      <input name="deadline" type="date" onChange={handleChange} required />
      <button type="submit">Save Goal</button>
    </form>
  );
}

export default GoalForm;
