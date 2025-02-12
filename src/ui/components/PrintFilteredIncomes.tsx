import { useEffect } from "react";
import { Expense, Income } from "../utils/storeApi";
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import WalletIcon from '@mui/icons-material/Wallet';
import {Divider, IconButton, Tooltip} from "@mui/material";
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';


interface PrintFilteredIncomesProps {
 month:string   
 year:string
 expenses:Expense[]
 incomes:Income[],
}

const PrintFilteredIncomes:React.FC<PrintFilteredIncomesProps> = ({year,month,expenses,incomes}) => {


    

    useEffect(()=>{
        handleIncomeExpenseStatisticsInTheMonth(year + "-" + month)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[incomes,expenses])
    

    const filterByDate = function(date:string){
        const filteredObject = incomes.filter((income)=>{
            return income.date?.startsWith(date)
        })
        return filteredObject
    }
    const filterExpenseByDate = function(date:string){
        const filteredObject = expenses.filter((expense)=>{
            return expense.date?.startsWith(date)
        })
        return filteredObject
    }

    const handleIncomeExpenseStatisticsInTheMonth = function(date:string){ 

        // Calculating all incomes
        const allIncomeObjectsInTheMonth:Income[] = filterByDate(date)
        let allIncomeInTheMonth:number = 0
        
        for(let i = 0; i < allIncomeObjectsInTheMonth.length; i++){
            // console.log(allIncomeObjectsInTheMonth[i].amount)
            allIncomeInTheMonth += allIncomeObjectsInTheMonth[i].amount
        }

        // Calculating all expenses
        const allExpenseObjectsInMonth:Expense[] = filterExpenseByDate(date)
        let allExpenseInTheMonth:number = 0

        for(let i = 0; i < allExpenseObjectsInMonth.length; i++){
            // console.log(allExpenseObjectsInMonth[i].amount)
            allExpenseInTheMonth += allExpenseObjectsInMonth[i].amount
        }

        // Calculating highest Expense
        let highestExpense:number = 0
        let highestExpenseObject:Expense | null = null
        for(let i = 0; i < allExpenseObjectsInMonth.length; i++){
            if(allExpenseObjectsInMonth[i].amount > highestExpense){
                highestExpense = allExpenseObjectsInMonth[i].amount
                highestExpenseObject = allExpenseObjectsInMonth[i]
            }
        }
    

        return (   
            <div className='grid grid-cols-2 w-[100%] items-start justify-start gap-12'>
                <div className='flex flex-col w-[100%] h-[100%] gap-0.5 rounded-sm items-start justify-center shadow-lg'>
                    
                    <div className='flex flex-row gap-3 w-[100%] items-center justify-start card-bg-color p-3 rounded-sm looking-at-animation'>    
                        <div className="flex flex-row gap-2 justify-start items-center w-[60%] ">
                            <div className='flex justify-center items-center rounded-full p-5 bg-[#1A43BF]'>
                                <AttachMoneyIcon sx={{scale:1.5}} />
                            </div>
                            <p>Total Income: </p>
                        </div>
                        <p className="font-bold">{allIncomeInTheMonth}€</p> 
                    </div>
                    <Divider />
                    <div className='flex flex-row gap-3 w-[100%] items-center justify-start card-bg-color p-3 rounded-sm looking-at-animation'>
                        <div className="flex flex-row gap-2 justify-start items-center w-[60%] ">
                            <div className='flex justify-center items-center rounded-full p-5  bg-[#1A43BF]'>
                                <MoneyOffIcon sx={{scale:1.5}} />
                            </div>
                            <p>Total Expenses: </p>
                        </div>
                        <p className="font-bold">{allExpenseInTheMonth}€</p>
                    </div>
                </div>

                <div className='flex flex-col w-[100%] h-[100%] gap-0.5 rounded-sm items-start justify-center shadow-lg'>
                    <div className='w-[100%] flex flex-row items-center justify-start rounded-sm p-3 card-bg-color looking-at-animation'>
                        <div className="flex flex-row gap-2 justify-start items-center">
                            <div className='flex justify-center items-center rounded-full p-5  bg-[#1A43BF]'>
                                <WalletIcon sx={{scale:1.5}} />
                            </div>
                            <p className="text-base font-">Total Savings This Month: </p>
                            <p className="text-base font-bold">{allIncomeInTheMonth - allExpenseInTheMonth}€</p>
                        </div>      
                    </div>
                    <Divider />
                    <Tooltip sx={{width:"100%",padding:"0px",margin:"0px",border:"none",backgroundColor:"transparent",color:"white",outline:"none"}} 
                    title={
                    <div className="flex flex-col justify-center items-start">
                        <div className="flex flex-row">
                            <p>{highestExpenseObject?.title} - {highestExpenseObject?.date}</p>
                        </div>
                        <div>
                            {highestExpenseObject?.info ? <p className="text-green-500">{highestExpenseObject?.info}</p> : <p className="text-red-500">No Additional Info</p>}
                        </div>
                    </div>}>
                    <IconButton sx={{width:"100%",padding:"0px",margin:"0px",border:"none",backgroundColor:"transparent",color:"white",outline:"none"}}>
                    <div className='w-[100%] flex flex-row items-center justify-start rounded-sm p-3 card-bg-color shadow-lg looking-at-animation'>
                        <div className="flex flex-row gap-2 justify-start items-center ">
                            <div className='flex justify-center items-center rounded-full p-5 bg-[#1A43BF]'>
                                <ProductionQuantityLimitsIcon sx={{scale:1.5}} />
                            </div>
                            <p className="text-base font-">Highest Expense This Month: </p>
                            <p className="text-base font-bold">{highestExpense}€</p>
                        </div>      
                    </div>
                    </IconButton>
                    </Tooltip>


                </div>   
            </div>
        )
    }
    
    return ( 
        <>
            {handleIncomeExpenseStatisticsInTheMonth(year + "-" + month)}
            
        </>
     );
}
 
export default PrintFilteredIncomes;