import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "./Card";

function Expenses(props){
    return (
        <Card className={'expenses'}>
            <ExpenseItem title={props.expense_list[0].title} amount ={props.expense_list[0].amount} date = {props.expense_list[0].date} />
            <ExpenseItem title={props.expense_list[1].title} amount ={props.expense_list[1].amount} date = {props.expense_list[1].date} />
            <ExpenseItem title={props.expense_list[2].title} amount ={props.expense_list[2].amount} date = {props.expense_list[2].date} />
            <ExpenseItem title={props.expense_list[3].title} amount ={props.expense_list[3].amount} date = {props.expense_list[3].date} />
        </Card>
    )
}

export default Expenses