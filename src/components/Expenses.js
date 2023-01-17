import ExpenseItem from './ExpenseItem.js'
import Card from './Card.js'
import './Expenses.css'



function Expenses(Props) {
    return (
        <Card className="expenses">
            <ExpenseItem 
            title={Props.expenses[0].title}
            amount={Props.expenses[0].amount}
            date={Props.expenses[0].date}
            ></ExpenseItem>
            <ExpenseItem
            title={Props.expenses[1].title}
            amount={Props.expenses[1].amount}
            date={Props.expenses[1].date}
            ></ExpenseItem>
            <ExpenseItem
            title={Props.expenses[2].title}
            amount={Props.expenses[2].amount}
            date={Props.expenses[2].date}
            ></ExpenseItem>
            <ExpenseItem
            title={Props.expenses[3].title}
            amount={Props.expenses[3].amount}
            date={Props.expenses[3].date}
            />
            <ExpenseItem
            title={Props.expenses[4].title}
            amount={Props.expenses[4].amount}
            date={Props.expenses[4].date}
            />
            <ExpenseItem
            title={Props.expenses[5].title}
            amount={Props.expenses[5].amount}
            date={Props.expenses[5].date}
            />
            <ExpenseItem
            title={Props.expenses[6].title}
            amount={Props.expenses[6].amount}
            date={Props.expenses[6].date}
            />
        </Card>
    )
}

export default Expenses;
