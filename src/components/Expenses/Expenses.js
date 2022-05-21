import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";

function Expenses(props){
    const [year,setYear] = useState('2020')
    const setSelectedYear = (year) => {
        setYear(year)
        console.log(year)
    }
    return (
        <div>
            <Card className={'expenses'}>
                <ExpensesFilter selectedYear={year} onChangeYear={setSelectedYear}/>
                {props.expense_list.map(expense=>(
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount ={expense.amount}
                        date ={expense.date}/>))}
            </Card>
        </div>
    )
}

export default Expenses