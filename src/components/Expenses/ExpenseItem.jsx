import React, {useState} from "react";
import './ExpenseItem.css'
import ExpenseDate from "./ExpenseDate";
import Card from "../../UI/Card";
const ExpenseItem = (props) => {

    const [priceText, setPriceText] = useState(props.data.price);

    const clickHandeler = () => {
        setPriceText(`Updated by click ${props.data.title}`);
    }

    return(
        <Card className="expense-item">
            <ExpenseDate date={props.data.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2 className="text-center font-bold">{props.data.title}</h2>
                <div className="expense-item__price">{priceText}</div>
            </div>
            <button onClick={() => clickHandeler()}>Click me</button>
        </Card>
    )
}

export default ExpenseItem;