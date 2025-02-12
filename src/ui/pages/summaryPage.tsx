import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useEffect, useState } from 'react';
import { Expense, getIncomes, getStoreData, Income } from '../utils/storeApi';
import PrintPieCharts from '../components/PrintPieCharts';
import { Link } from 'react-router-dom';
import Backgorund from '../components/Backgorund';
import { motion } from 'motion/react';
import { animation2,animation22 } from '../utils/animation';
import PrintFilteredIncomes from '../components/PrintFilteredIncomes';




const SummaryPage = () => {

    const [month,setMonth] = useState<string>("")
    const [year,setYear] = useState<string>("")

        const [incomes,setIncomes] = useState<Income[]>([])
        const [expenses,setExpenses] = useState<Expense[]>([])
    
        useEffect(()=>{
            const incomeSetter = async function(){
                const incomeList:Income[] = await getIncomes()
                setIncomes(incomeList) 
            }
            const expenseSetter = async function(){
                const expenseList:Expense[] = await getStoreData()
                setExpenses(expenseList)
            }
            const monthNow = (new Date().getMonth()+1).toString()
            const yearNow = new Date().getFullYear().toString()

            expenseSetter()
            incomeSetter()
            setMonth(monthNow)
            setYear(yearNow)
            console.log('Current Month: ',monthNow)
            console.log('Current Year: ',yearNow)
    
        },[])

    return ( 
        <motion.div 
        className='w-[100vw] h-[100vh] flex items-center flex-col max-w-[1200px] max-h-[1000px] px-24 gap-24'>
            <motion.div 
                    variants={animation2}
                    animate="animate"
                    exit="exit"
            className='w-[100vw] flex items-center flex-col max-w-[1200px] max-h-[1000px] pt-24 px-24 gap-12 z-10'>
            {month && year && <div className='w-[50%] items-center justify-center grid grid-cols-2 gap-6 mt-12'>
               {year && <select defaultValue={year} onChange={(e)=>{setYear(e.target.value)}} className='card-bg-color rounded-sm p-2 text-xl' typeof='select' name="" id="">
                    <option value="2025">2025</option>
                    <option value="2026">2026</option> 
                    <option value="2027">2027</option>
                </select>}

                <select defaultValue={month} className='rounded-sm p-2 text-xl card-bg-color' onChange={(e)=>{setMonth(e.target.value)}} name="" id="">
                    <option value="1">January</option>
                    <option value="2">February</option>
                    <option value="3">March</option>
                    <option value="4">April</option>
                    <option value="5">May</option>
                    <option value="6">June</option>
                    <option value="7">July</option>
                    <option value="8">August</option>
                    <option value="9">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                </select>
            </div>}
            

            {year && month && <PrintFilteredIncomes  expenses={expenses} incomes={incomes} year={year} month={month}/>}
            </motion.div>

            <motion.div 
                    variants={animation22}
                    animate="animate"
                    exit="exit"
            className='w-[100%] h-[40%] flex flex-col gap-12 justify-center items-center z-10 '>
                {expenses && incomes && year && month && <PrintPieCharts expenses={expenses} incomes={incomes} year={year} month={month}/>}            
            </motion.div>
            
            
            <Link to="/" className="absolute top-20 left-20 back-button z-10"><ArrowBackIosIcon  sx={{color:"white"}}/></Link>
            <Backgorund randomAnimOn={true}/>
            </motion.div>
     );
}
 
export default SummaryPage;