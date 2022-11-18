import "./ExpenseItem.css";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import {useState} from "react";


function ExpenseItem(props) {

  const [title, setTitle] = useState(0);

  //create a for loop that loops till 10

  const clickHandler = () => {
    setTitle(title+1);
    
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Tite</button>
    </Card>
  );
}

export default ExpenseItem;
