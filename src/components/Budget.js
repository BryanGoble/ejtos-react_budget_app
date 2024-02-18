import React, { useContext, useState, useRef, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency, dispatch, expenses } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    // Calculate total expenses
    const totalExpense = useRef(0);
    useEffect(() => {
        dispatch({ type: "SET_BUDGET", payload: newBudget });
    }, [newBudget]);
    useEffect(() => {
        totalExpense.current = expenses.reduce((prev, curr) => {
        return prev + curr.cost;
        }, 0);
    }, []);

    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
        dispatch({
            type: 'SET_BUDGET',
            payload: parseInt(event.target.value),
        });
    };

    // const handleKeyDown = (e) => {
    //     if (e.key === 'ArrowUp') {
    //         setNewBudget(prevBudget => parseInt(prevBudget) + 10);
    //         console.log(totalExpense)
    //     } else if (e.key === 'ArrowDown') {
    //         if (parseInt(newBudget) >= totalExpense + 10) {
    //             setNewBudget(prevBudget => parseInt(prevBudget) - 10);
    //         } else {
    //             alert("You cannot reduce the budget value lower than the spending.");
    //         }
    //     }
    // };

    return (
        <div className='alert alert-secondary'>
            <span>
                Budget: {currency.symbol}
            </span>
            <input
                type="number"
                step="10"
                min={totalExpense.current}
                max={20000}
                value={newBudget}
                onChange={handleBudgetChange}
                // onKeyDown={handleKeyDown}
            />
        </div>
    );
};

export default Budget;
