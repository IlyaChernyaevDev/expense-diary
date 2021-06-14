import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState('');

  return (
    <div>
      <ExpensesFilter setSelectedYear={setSelectedYear} />
      <Card className='expenses'>
        {props.items.map((expense) => {
          return (
            <ExpenseItem
              title={expense.title}
              date={expense.date}
              amount={expense.amount}
            />
          );
        })}
      </Card>
    </div>
  );
};

export default Expenses;
