import { useState } from 'react';

function DepositForm({ goalId, onDeposit }) {
  const [amount, setAmount] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onDeposit(goalId, parseFloat(amount));
    setAmount('');
  }

  return (
    <form className="deposit-form" onSubmit={handleSubmit}>
      <input type="number" value={amount} onChange={e => setAmount(e.target.value)} placeholder="Deposit Amount" required />
      <button type="submit">Deposit</button>
    </form>
  );
}

export default DepositForm;
