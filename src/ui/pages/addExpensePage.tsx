import { useState } from "react"
import { Expense } from "../../electron/resources"
import { createNewExpenseObject, getStoreData, setStoreData } from "../utils/storeApi"
import { turnImageToBase64 } from "../utils/iamgeToBase64"

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from "@mui/x-date-pickers";
import DialogPopUp from "../components/Dialog";
import AlertMessage from "../components/Alert";
import { Link } from "react-router-dom";

interface CalendarOutput{
    $D:number,
    $M:number,
    $y:number
}

const AddExpensePage = () => {
    const DEFAULT_IMAGE_URL = "https://media.istockphoto.com/id/1352945762/vector/no-image-available-like-missing-picture.jpg?s=612x612&w=0&k=20&c=4X-znbt02a8EIdxwDFaxfmKvUhTnLvLMv1i1f3bToog="

    const [expenseTitle,setExpenseTitle] = useState<string>("")
    const [expenseAmount,setExpenseAmount] = useState<number>(0)
    const [expenseInfo,setIxpenseInfo] = useState<string>("")
    const [expenseImage,setExpenseImage] = useState<string | null>(null)
    const [expenseCategory,setExpenseCategory] = useState<string>("")
    const [expenseDate,setExpenseDate] = useState<string | null>(null)

    const [showAlert,setShowAlert] = useState<boolean>(false)
    const [alertMessage,setAlertMessage] = useState<string>("")
    const [dialogOpenState,setDialogOpenState] = useState<boolean>(false)

    const handleDateInputChange = (date:CalendarOutput) => {
            const day = (date.$D).toString()
            const month = (date.$M + 1).toString()
            const year = date.$y.toString()
            const stringDate = `${year}-${month}-${day}`
            setExpenseDate(stringDate)
    }

    const showAlertTimer = function(){
        setShowAlert(true)
        setTimeout(()=>{
            setShowAlert(false)
        },3000)
    }
     const handleClick = async function(title:string,amount:number,info:string,image:string | null,date:string | null,category:string){
        const newExpense = createNewExpenseObject(title,amount,info,image,date,category)

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

        setStoreData(newExpense) 
        const currentExpenses:Expense[] = await getStoreData()
        emptyAllFields()
        console.log(currentExpenses)
        setDialogOpenState(true)
    }

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            try {
                const base64Image = await turnImageToBase64(file);
                setExpenseImage(base64Image);
            } catch (error) {
                console.error("Error converting image to base64:", error);
            }
        }
    }

    const emptyAllFields = function(){
        setExpenseTitle("")
        setExpenseAmount(0)
        setIxpenseInfo("")
        setExpenseImage(null)
        setExpenseCategory("")
    }

    return ( 
        <div className=" w-[100vw] h-[100vh] flex items-center flex-col max-w-[1200px] max-h-[1000px] p-24">
                <div className="w-[100%] flex flex-row justify-between h-full py-24 px-12">
                    <div className="flex flex-col items-start justify-start gap-12 ">
                        <div className="flex flex-col gap-4 items-start w-[100%]"> 
                            <div className="flex flex-col gap-1 items-start w-[100%]">
                                <label className="m-0 text-xs" htmlFor="Expense Name">Expense Name</label>
                                <input className="w-[100%]" id="Expense Name" value={expenseTitle} type="text" onChange={(e)=>setExpenseTitle(e.target.value)}/>
                            </div>

                            <div className="flex flex-col gap-1 items-start w-[100%]">
                                <label className="m-0 text-xs w-[100%]" htmlFor="Expense Amount">Expense Amount</label>
                                <input  className="w-[100%] appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none" id="Expense Amount" value={expenseAmount} type="number" onChange={(e)=>setExpenseAmount(parseInt(e.target.value))} placeholder="0€" />
                            </div>

                            <div className="flex flex-col gap-1 items-start w-[100%]">
                                <label className="m-0 text-xs w-[100%]" htmlFor="Expense Details">Expense Details</label>
                                <input className="w-[100%]" value={expenseInfo} type="text" onChange={(e)=>setIxpenseInfo(e.target.value)}/>
                            </div>

                            <div className="flex flex-col gap-1 items-start w-[100%]">
                                <label className="m-0 text-xs" htmlFor="Expense Category">Expense Category</label>

                                <select className="p-2 border w-[100%]" onChange={(e)=>setExpenseCategory(e.target.value)} name="categories" id="">
                                    <option className="text-slate-300" disabled selected value="">Choose a category</option>
                                    <option className="bg-slate-100" value="groceries">Groceries</option>
                                    <option className="bg-slate-100" value="transportation">Transportation</option>
                                    <option className="bg-slate-100" value="entertainment">Entertainment</option>
                                    <option className="bg-slate-100" value="health">Health</option>
                                    <option className="bg-slate-100" value="misc">Misc</option>
                                </select>
                            </div>
                        </div>


                        <div className="flex flex-col gap-1 items-start border bg-white rounded-sm">
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DateCalendar onChange={(value)=>handleDateInputChange(value)} 
                                sx={{width:"100%",height:"100%","& .MuiPickersDay-root":{fontSize:"0.9rem",fontStyle:"italic"},"& .MuiPickersDay-root:hover": {
                                backgroundColor: "#A1E3F9 ", // Custom hover color
                                color: "black", // Change text color
                                borderRadius: "50%", // Optional: fully rounded
                                transform: "", // Optional: slightly enlarge
                                transition: "0.3s ease", // Smooth hover transition
          },}}/>
                            </LocalizationProvider>
                        </div>                            
                    </div>

                    <div className="flex flex-col items-center h-full"> 
                        <div className="flex flex-col items-center justify-start w-[300px] h-[400px]">
                            {expenseImage ? 
                            <img src={expenseImage} className="max-w-[300px] max-h-[400px] rounded-sm" alt="" />
                            :
                            <img src={DEFAULT_IMAGE_URL} className="max-w-[300px] max-h-[400px] rounded-sm" alt="" />
                        }
                        </div>

                        <div className="flex flex-col gap-1 items-start">
                            <label className="m-0 text-xs" htmlFor="Expense Category">Add Expense Receipt</label>
                            <input className="border p-2" type="file" accept="image/*" onChange={(e)=>handleFileChange(e as React.ChangeEvent<HTMLInputElement>)}/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row gap-4 justify-end items-center">
                    <button className="button" onClick={()=>handleClick(expenseTitle,expenseAmount,expenseInfo,expenseImage,expenseDate,expenseCategory)}>Add Expense</button>
                    {/* <button className="button" onClick={()=>emptyAllFields()}>Empty Fields</button> */}
                </div>

                {showAlert && <AlertMessage message={alertMessage}/>}

                <Link to="/" className="absolute top-20 left-20 back-button"><ArrowBackIosIcon/></Link>
                {/* <button onClick={()=>emptyStoreData()}>Empty Store</button> */}
                {dialogOpenState && <DialogPopUp message={"Your expense has been added successfully"} showSecondButton={true} triggerVisibility={()=>setDialogOpenState(!dialogOpenState)}/>}
        </div>
     );
}

export default AddExpensePage;