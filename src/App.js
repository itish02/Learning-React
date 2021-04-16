import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import ExpenseItems from './components/ExpenseItem';

function App() {
  const expenses = [
    { title: 'Food 🍛', amount: 2000, date: new Date(2021, 4, 16) },
    { title: 'Groceries 🥦', amount: 1200, date: new Date(2021, 4, 16) },
    { title: 'Rent 🏠', amount: 10000, date: new Date(2021, 4, 16) },
    { title: 'Netflix 🎥', amount: 800, date: new Date(2021, 5, 20)},
  ];
  return (
    <div>
      <h2> Let 's get started!</h2>
      <p>Ah shit, here we go again..</p>
      <ExpenseItems
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}></ExpenseItems>

      <ExpenseItems
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}></ExpenseItems>

      <ExpenseItems
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}></ExpenseItems>

      <ExpenseItems
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}></ExpenseItems>
    </div>
  );
}

export default App;

