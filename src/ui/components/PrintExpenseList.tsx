import { useEffect, useState } from "react";
import { Expense, getStoreData } from "../utils/storeApi";
import ExpenseCard from "./expenseCard";

const PrintExpenseList = () => {

    const [expenses,setExpenses] = useState<Expense[]>([])
    
    useEffect(()=>{
        const getData = async function(){
            const data = await getStoreData()
            setExpenses(data)
        }
        getData()
    },[])

    useEffect(()=>{ 
        console.log('Expenses at the list printer: ',expenses)
    },[expenses])

    

    return ( 
        <>
            {expenses && expenses.map((expense)=>(
                <div 
                className="h-[80%] max-h-[600px]" key={expense.id}
                style={{scrollbarWidth: "thin",scrollbarColor: "#A1E3F9 white"}}
                >
                    <ExpenseCard title={expense.title} amount={expense.amount} info={expense.info} category={expense.category} date={expense.date || ""} image={expense.image}/>
                </div>
            ))}
        </>
     );
}
 
export default PrintExpenseList;