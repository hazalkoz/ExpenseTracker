import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";
import ExpensesList from "./ExpensesList";

function Expenses(props){
    const [year,setYear] = useState('2020')
    const setSelectedYear = (year) => {
        setYear(year)
    }
    const filteredExpenses = props.expense_list.filter(expense=>{
        return expense.date.getFullYear().toString()===year
    });

    return (
        <div>
            <Card className={'expenses'}>
                <ExpensesFilter selectedYear={year} onChangeYear={setSelectedYear}/>
                <ExpensesList expenses={filteredExpenses}/>
            </Card>
        </div>
    )
}

export default Expenses