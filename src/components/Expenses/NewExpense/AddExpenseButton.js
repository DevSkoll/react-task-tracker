import React from "react";

const AddExpenseButton = ({ onExpenseToggle }) => {


    return (
            <button onClick={onExpenseToggle}>Add Expense</button>
    );
}

export default AddExpenseButton;