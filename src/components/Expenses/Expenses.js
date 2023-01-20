import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card'
import './Expenses.css'
import {useState} from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('ALL');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.expenses.filter(expense => {
        // If filter is none, return all expenses
        if (filteredYear === 'ALL') {
            return true;
        }
        // If filter is not none, return only expenses that match the filter
        return expense.date.getFullYear().toString() === filteredYear;
    });



    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    onChangeFilter={filterChangeHandler}
                    selected={filteredYear}
                />
                <ExpensesList expenses={filteredExpenses}/>
            </Card>
        </div>
    )
}

export default Expenses;


{/*{filteredExpenses.length === 0 && <p>No expenses found.</p>}*/}
{/*{filteredExpenses.map((expense) => (*/}
{/*        <ExpenseItem*/}
{/*            key={expense.id}*/}
{/*            title={expense.title}*/}
{/*            amount={expense.amount}*/}
{/*            date={expense.date}*/}
{/*        />*/}
{/*    ))}*/}