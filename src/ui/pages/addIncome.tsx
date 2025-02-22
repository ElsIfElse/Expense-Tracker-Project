import { useState } from "react"
import { addIncome, createNewIncomeObject, getIncomes, Income } from "../utils/storeApi"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import DialogPopUp from "../components/Dialog";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import AlertMessage from "../components/Alert";
import { Link } from "react-router-dom";
import Backgorund from "../components/Backgorund";
import { motion } from "motion/react";
import { animation } from "../utils/animation";


const AddIncomePage = () => {

    interface CalendarOutput{
        $D:number,
        $M:number,
        $y:number
    }


    const [incomeTitle,setIncomeTitle] = useState<string>("")
    const [incomeAmount,setIncomeAmount] = useState<number>(0)
    const [incomeInfo,setIncomeInfo] = useState<string>("")
    const [incomeCategory,setIncomeCategory] = useState<string>("")
    const [incomeDate,setIncomeDate] = useState<string | null>(null)
    const [dialogOpenState,setDialogOpenState] = useState<boolean>(false)

    // const [incomes,setIncomes] = useState<Income[]>([])
    const [showAlert,setShowAlert] = useState<boolean>(false)
    const [alertMessage,setAlertMessage] = useState<string>("")



    const showAlertTimer = function(){
        setShowAlert(true)
        setTimeout(()=>{
            setShowAlert(false)
        },3000)
    }

    // useEffect(()=>{
    //     const incomeSetter = async function(){
    //         const incomeList:Income[] = await getIncomes()
    //         setIncomes(incomeList)
    //         const currentIncomes:Income[] = await getIncomes()
    //         console.log('Current Incomes: ',currentIncomes)
    //     }
    //     incomeSetter() 
    // },[])

    // useEffect(()=>{
    //     const incomeSetter = async function(){
    //         const incomeList:Income[] = await getIncomes()
    //         setIncomes(incomeList)
    //         const currentIncomes:Income[] = await getIncomes()
    //         console.log('Current Incomes: ',currentIncomes)
    //     }
    //     incomeSetter()
    // },[incomes])

    const emptyAllFields = function(){
        setIncomeTitle("")
        setIncomeAmount(0)
        setIncomeInfo("")
        setIncomeCategory("")
        setIncomeDate(null)
    }

    const handleClick = async function(title:string,amount:number,info:string,date:string | null,category:string){
        if(!title){
            setAlertMessage("Please enter a title!")
            showAlertTimer()
            return
        }

        if(!amount){
            setAlertMessage("Please enter an amount!")
            showAlertTimer()
            return
        }
        if(!category){
            setAlertMessage("Please choose a category!")
            showAlertTimer()
            return
        }
        if(!date){
            setAlertMessage("Please enter a date!")
            showAlertTimer()
            return
        }
        
        const newIncome:Income = createNewIncomeObject(title,amount,info,date,category)
        console.log('Income to be added: ',newIncome)
        await addIncome(newIncome)
        // setIncomes(updatedIncomes)

        emptyAllFields()
        const currentIncomes:Income[] = await getIncomes()
        console.log("List of incomes: ",currentIncomes)
        setDialogOpenState(true)
    }

    const handleDateInputChange = (date:CalendarOutput) => {
        const day = (date.$D).toString()
        const month = (date.$M + 1).toString()
        const year = date.$y.toString()
        const stringDate = `${year}-${month}-${day}`
        setIncomeDate(stringDate)
    }



    return ( 
        <div className=" w-[100vw] h-[100vh] flex items-center flex-col max-w-[1200px] max-h-[1000px] ">
                <motion.div 
                variants={animation}
                animate="animate"
                exit="exit"
                className="w-[100%] flex flex-row justify-between h-full pt-[192px] px-[144px] z-10 ">
                    <div className="flex flex-col items-start justify-start gap-12 ">
                        <div className="flex flex-col gap-4 items-start w-[100%]"> 
                    <div className="flex flex-col gap-1 items-start w-[100%]">
                        <label className="m-0 text-xs w-[100%]" htmlFor="Value Name">Income Name</label>
                        <input className="w-[100%]" id="Value Name" value={incomeTitle} type="text" onChange={(e)=>setIncomeTitle(e.target.value)}/>
                    </div>

                    <div className="flex flex-col gap-1 items-start w-[100%] ">
                        <label className="m-0 text-xs" htmlFor="Expense Amount">Expense Amount</label>
                        <input className="w-[100%] appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none" id="Expense Amount" value={incomeAmount} type="number" onChange={(e)=>setIncomeAmount(parseInt(e.target.value))} placeholder="0€" />
                    </div>

                    <div className="flex flex-col gap-1 items-start w-[100%] ">
                        <label className="m-0 w-[100%] text-xs" htmlFor="Income Details">Income Details</label>
                        <input className="w-[100%]" value={incomeInfo} type="text" onChange={(e)=>setIncomeInfo(e.target.value)}/>
                    </div>

                    <div className="flex flex-col gap-1 items-start w-[100%]">
                        <label className="m-0 text-xs" htmlFor="Income Category">Income Category</label>

                        <select className="p-2 border w-[100%]" onChange={(e)=>setIncomeCategory(e.target.value)} name="categories" id="">
                            <option className="text-slate-300" disabled selected value="">Choose a category</option>
                            <option className="bg-slate-100" value="misc">Misc</option>
                            <option className="bg-slate-100" value="salary">Salary</option>
                            <option className="bg-slate-100" value="gift">Gift</option>
                            <option className="bg-slate-100" value="rent">Rent</option>
                        </select>
                    </div>
                    </div>
                        <div className="flex flex-col gap-1 items-start border-2 border-slate-600  bg-white rounded-sm z-10">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DateCalendar onChange={(value)=>handleDateInputChange(value)} 
                                sx={{border:"none",backgroundColor:"#0A2472",width:"100%",height:"100%",
                                    "& .MuiPickersDay-root":{fontSize:"0.9rem",fontStyle:"italic",color:"white"},"& .MuiPickersDay-root:hover": {
                                backgroundColor: "#A1E3F9 ", // Custom hover color
                                color: "white", // Change text color
                                borderRadius: "50%", // Optional: fully rounded
                                transform: "", // Optional: slightly enlarge
                                transition: "0.3s ease", // Smooth hover transition
                                },
                                "& .MuiTypography-root":{color:"white"},
                                "& .MuiSvgIcon-root":{color:"white"},
                                "& .MuiDateCalendar-root":{border:"none"},
                                }}/>
                            </LocalizationProvider>
                        </div>
                    </div>
                </motion.div>
                         
        <div className="flex flex-row gap-4 justify-end items-center z-10">
            <button className="button add-button" onClick={()=>handleClick(incomeTitle,incomeAmount,incomeInfo,incomeDate,incomeCategory)}>Add Income</button>
            {/* <button className="button" onClick={()=>emptyAllFields()}>Empty Fields</button> */}
        </div>
       {showAlert && <AlertMessage message={alertMessage}/>}
       <Link to="/" className="absolute top-20 left-20 back-button z-10"><ArrowBackIosIcon  sx={{color:"white"}}/></Link>
       {/* <button onClick={()=>emptyIncomeStore()}>Empty Store</button> */}
        {dialogOpenState && <DialogPopUp  message="Your income has been added successfully" showSecondButton={true} triggerVisibility={()=>setDialogOpenState(!dialogOpenState) } refreshPage={true}/>}
        <Backgorund randomAnimOn={true} />
        </div>
        
     );
}
 
export default AddIncomePage;