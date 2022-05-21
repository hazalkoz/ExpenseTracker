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
                <ExpenseItem title={props.expense_list[0].title} amount ={props.expense_list[0].amount} date = {props.expense_list[0].date} />
                <ExpenseItem title={props.expense_list[1].title} amount ={props.expense_list[1].amount} date = {props.expense_list[1].date} />
                <ExpenseItem title={props.expense_list[2].title} amount ={props.expense_list[2].amount} date = {props.expense_list[2].date} />
                <ExpenseItem title={props.expense_list[3].title} amount ={props.expense_list[3].amount} date = {props.expense_list[3].date} />
            </Card>
        </div>
    )
}

export default Expenses