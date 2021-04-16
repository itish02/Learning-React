import './ExpenseItem.css'


const ExpenseItems = (props) => {

    // const expenseDate = new Date(2021, 4, 16);
    // const expenseName = 'Car insurance';
    // const expensePrice = 15000;

    return (
        <div className="expense-item">
            <div>{props.date.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">₹{props.amount}</div>
            </div>
        </div>
    )
}

export default ExpenseItems;
