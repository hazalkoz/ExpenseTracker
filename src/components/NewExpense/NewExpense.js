import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
import {useState} from "react";

const NewExpense = (props) => {
    const [isFormOpen,setFormOpen] = useState(false)

    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.addExpense(expenseData);
        setFormOpen(false);
    }
    const openFormHandler = () => {
        setFormOpen(true)
    };
    const closeFormHandler = () => {
        setFormOpen(false)
    };
    return (
        <div className='new-expense'>
            {!isFormOpen && <button onClick={openFormHandler}>Add New Expense</button>}
            {isFormOpen && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onClose={closeFormHandler}/>}

        </div>
    );
};

export default NewExpense;