import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [showExpenseForm, setShowExpenseForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setShowExpenseForm(false);
  };

  let newExpenseContent = <button onClick={() => setShowExpenseForm(true)}>Add New Expense</button>;

  if(showExpenseForm) {
    newExpenseContent = <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} cancel={setShowExpenseForm}/>;
  }

  return (
    <div className='new-expense'>
      {newExpenseContent}
    </div>
  );
};

export default NewExpense;
