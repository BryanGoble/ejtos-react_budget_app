import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { FaPlusCircle, FaMinusCircle, FaTimesCircle } from "react-icons/fa";
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    };
    const decreaseAllocation = (name) => {
        const expense = {
          name: name,
          cost: 10,
        };
    
        dispatch({
          type: "RED_EXPENSE",
          payload: expense,
        });
    };

    return (
        <tr>
        <td style={{ 'text-align': 'left' }}>{props.name}</td>
        <td style={{ 'text-align': 'left' }}>{currency.symbol}{props.cost}</td>
        <td><button style={{ border: "none", backgroundColor: "transparent" }} onClick={event=> increaseAllocation(props.name)}><FaPlusCircle size="2em" color="green" /></button></td>
        <td><button style={{ border: "none", backgroundColor: "transparent" }} onClick={event=> decreaseAllocation(props.name)}><FaMinusCircle size="2em" color="red" /></button></td>
        <td><button style={{ border: "none", backgroundColor: "transparent" }} onClick={handleDeleteExpense}><FaTimesCircle size="2em" color="black" /></button></td>
        </tr>
    );
};

export default ExpenseItem;