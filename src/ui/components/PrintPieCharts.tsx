import { useEffect, useState } from "react"
import { Expense, Income } from "../utils/storeApi"
import PiChartElement from "./PieChart"
import { filterByDate } from "../utils/determineMonthByIndex"


interface PrintPieChartsProps {
    year:string
    month:string
    expenses:Expense[]
    incomes:Income[]
}


const PrintPieCharts:React.FC<PrintPieChartsProps> = ({year,month,expenses,incomes}) => {
    
// const expenseCategories:string[] = ["groceries","entertainment","health","maya","misc"]
// const incomeCategories:string[] = ["salary","gifts","misc"]

const [gorceryValue,setGorceryValue] = useState<number>(0)
const [entertainmentValue,setEntertainmentValue] = useState<number>(0)
const [healthValue,setHealthValue] = useState<number>(0)
const [miscValue,setMiscValue] = useState<number>(0)
const [mayaValue,setMayaValue] = useState<number>(0)
const [transportationValue,setTransportationValue] = useState<number>(0)

const [salaryValue,setSalaryValue] = useState<number>(0)
const [giftsValue,setGiftsValue] = useState<number>(0)
const [rentValue,setRentValue] = useState<number>(0)
const [miscIncomeValue,setMiscIncomeValue] = useState<number>(0)

const [expenseSum,setExpenseSum] = useState<number>(0)
const [incomeSum,setIncomeSum] = useState<number>(0)



const getObjectsByCategory = function(category:string, object:Expense[] | Income[]):Expense[] | Income[] {
   const groceryObjects:Expense[] | Income[] = object.filter((expense)=>{
        return expense.category === category
    })
    return groceryObjects
}

const addAmountsTogether = function(objects:Expense[] | Income[]):number{
    let totalAmount:number = 0
    for(let i = 0; i < objects.length; i++){
        totalAmount += objects[i].amount
    }
    return totalAmount
}



useEffect(()=>{

    const mainExpenseFunction = function(){
        const objectsInMonth = filterByDate(expenses,year + "-" + month)
        setGorceryValue(Math.round(addAmountsTogether(getObjectsByCategory("groceries",objectsInMonth))/expenseSum*100))
        setEntertainmentValue(Math.round(addAmountsTogether(getObjectsByCategory("entertainment",objectsInMonth))/expenseSum*100))
        setHealthValue(Math.round(addAmountsTogether(getObjectsByCategory("health",objectsInMonth))/expenseSum*100))
        setMiscValue(Math.round(addAmountsTogether(getObjectsByCategory("misc",objectsInMonth))/expenseSum*100))
        setMayaValue(Math.round(addAmountsTogether(getObjectsByCategory("maya",objectsInMonth))/expenseSum*100))
        setTransportationValue(Math.round(addAmountsTogether(getObjectsByCategory("transportation",objectsInMonth))/expenseSum*100))

    }
    const mainIncomeFunction = function(){
        const objectsInMonth = filterByDate(incomes,year + "-" + month)
        setSalaryValue(Math.round(addAmountsTogether(getObjectsByCategory("salary",objectsInMonth))/incomeSum*100))
        setGiftsValue(Math.round(addAmountsTogether(getObjectsByCategory("gift",objectsInMonth))/incomeSum*100))
        setMiscIncomeValue(Math.round(addAmountsTogether(getObjectsByCategory("misc",objectsInMonth))/incomeSum*100))
        setRentValue(Math.round(addAmountsTogether(getObjectsByCategory("rent",objectsInMonth))/incomeSum*100))
    }

    const getIncomeExpenseSummary = function(){
        const allExpenses = filterByDate(expenses,year + "-" + month)
        const allIncomes = filterByDate(incomes,year + "-" + month)
    
        setExpenseSum(addAmountsTogether(allExpenses))
        setIncomeSum(addAmountsTogether(allIncomes))
        
    }
    
    mainExpenseFunction()
    mainIncomeFunction()
    getIncomeExpenseSummary()

    console.log({expenseSum:expenseSum, incomeSum:incomeSum})

},[incomes,expenses,month,year,incomeSum,expenseSum])


    

    return ( 
        <div className='w-[100%] h-[100%] grid grid-cols-2 gap-12 rounded-md z-10'>
            <div 
            
            className=' h-[100%] flex flex-col justify-center items-center gap-1 shadow-lg z-10'>
                <div className="w-[100%] flex flex-row justify-start ">
                    <label>Expense breakdown</label>
                </div>
                {/* <h3 className='italic'>Expenses</h3> */}
                <PiChartElement data={[{value: transportationValue, category: "Transportation"},{value: gorceryValue, category: "Groceries"},{value: entertainmentValue, category: "Entertainment"},{value: healthValue, category: "Health"},{value: miscValue, category: "Misc"},{value: mayaValue, category: "Maya"}]}/>
            </div> 
            <div className=' h-[100%] flex flex-col justify-center items-center gap-1 shadow-lg'>
                {/* <h3 className='italic'>Incomes</h3> */}
                <div className="w-[100%] flex flex-row justify-start">
                    <label>Income breakdown</label>
                </div>
                <PiChartElement data={[{value: salaryValue, category: "Salary       "},{value: giftsValue, category: "Gifts"},{value: miscIncomeValue, category: "Misc"},{value: rentValue, category: "Rent"}]}/>
            </div>
        </div>
     );
}
 
export default PrintPieCharts;