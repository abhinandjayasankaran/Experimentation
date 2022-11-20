import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm"
import {useState} from "react";

function NewExpense(props) {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: (parseInt(10000 * Math.random())).toString()
        };
        props.onAddExpense(expenseData);
    }

    const [renderState, setRenderState] = useState(false);
    
    const onCancelHandler = () => {
        console.log("Cancel Clicked");
        setRenderState(false);
    }
        
    const addExpenseHandler = () => {
        console.log("Button Clicked");
        setRenderState(true);
    }

    if(renderState===true){
        return (
            <div className="new-expense">
                <ExpenseForm onCancel={onCancelHandler} onSaveExpenseData={saveExpenseDataHandler}/>
            </div>
        );
    }

    return (
        <div className="new-expense">
            <button onClick={addExpenseHandler}>Add New Expense</button>
           {/* {<ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>}  */}
        </div>
    );
}

export default NewExpense;