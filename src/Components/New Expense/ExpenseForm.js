// import React, { useState } from 'react';
import './ExpenseForm.css'
import { useState } from 'react';

const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // const [userInput, setEnteredValue] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })
    // console.log(userInput);
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setEnteredValue({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // })
        // setEnteredValue((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value };
        // })
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setEnteredValue({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // })
        // setEnteredValue((prevState) => {
        //     return { ...prevState, enteredAmount: event.target.value };
        // })
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setEnteredValue({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // })
        // setEnteredValue((prevState) => {
        //     return { ...prevState, enteredDate: event.target.value };
        // })
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };

        console.log(expenseData);
    };

    return (
        <form onSubmit = {submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" placeholder="Title" onChange = {titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" placeholder="Amount" onChange = {amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" placeholder="Date" onChange = {dateChangeHandler}/>
                </div>
            </div>
            <div className="new_expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;