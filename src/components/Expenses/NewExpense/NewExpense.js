import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import AddExpenseButton from "./AddExpenseButton";

const NewExpense = (props) => {
    const [addExpense, setAddExpense] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onsaveExpense(expenseData);
    };

    const newExpenseHandler = () =>{
        setAddExpense(!addExpense);
    }

    return(
        <div className="new-expense">
            {addExpense ? <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onExpenseToggle={newExpenseHandler}/> : <AddExpenseButton onExpenseToggle={newExpenseHandler}/>}
        </div>);
};

export default NewExpense;