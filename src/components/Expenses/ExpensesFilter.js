import React, {useEffect} from "react";
import "./ExpensesFilter.css";
const ExpensesFilter = (props) => {
    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    }
    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={props.selected} onChange={dropdownChangeHandler}>
                    <option value='ALL'>ALL</option>
                    {
                        // Options for the last 5 years from the current date storing the year in the value attribute
                        [...Array(5)].map((_, i) => {
                            const year = new Date().getFullYear() - i;
                            return <option key={year} value={year}>{year}</option>
                        })
                    }
                </select>
            </div>
        </div>
    );
}

export default ExpensesFilter;