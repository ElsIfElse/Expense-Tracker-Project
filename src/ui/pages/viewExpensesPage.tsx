// import ExpenseCard from "../components/expenseCard";

import { Button, MobileStepper } from "@mui/material";
import PrintExpenseList from "../components/PrintExpenseList";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { useState } from "react";
import { useTheme } from '@mui/material/styles';
import PrintIncomeList from "../components/PrintIncomeList";
import { Link } from "react-router-dom";



const ViewExpensesPage = () => {

    const [triggerShownList, setTriggerShownList] = useState(false);
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setTriggerShownList(true);
      };
    
      const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
        setTriggerShownList(false);
      };

    return ( 
        <div className="bg-[#A1E3F9] w-[100vw] h-[100vh] flex flex-col items-center py-24">
    <MobileStepper
      variant="dots"
      steps={2}
      position="static"
      activeStep={activeStep}
      sx={{".MuiMobileStepper-dot":{scale:1}, borderRadius: "6px",minWidth: 300,maxWidth: 300,maxHeight: 50,minHeight: 50, flexGrow: 1 }}
      nextButton={
        <Button size="small" onClick={handleNext} disabled={activeStep === 1} sx={{fontFamily:"Figtree"}}>
          Income
          {theme.direction === 'rtl' ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </Button>
      }
      backButton={
        <Button size="small" onClick={handleBack} disabled={activeStep === 0} sx={{fontFamily:"Figtree"}}>
          {theme.direction === 'rtl' ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
          Expense
        </Button>
      }
    />
        {triggerShownList && <div className="bg-[#A1E3F9] w-[100vw] flex flex-col items-center py-12">
            <div className="w-[60vw] flex flex-col items-center gap-2 max-h-[600px]">
                <div className="w-[100%] flex flex-col items-start">
                    <h1>Income list</h1>
                </div>
                <PrintIncomeList/>
            </div>
            <a className="absolute top-20 left-20 back-button" href="/"><ArrowBackIosIcon/></a>
        </div>}
        {!triggerShownList && <div className="bg-[#A1E3F9] w-[100vw] h-[100vh] flex flex-col items-center py-12">
            <div className="w-[60vw] flex flex-col items-center gap-2 max-h-[600px]">
            <div className="w-[100%] flex flex-col items-start">
                    <h1>Expense list</h1>
                </div>
                <PrintExpenseList/>
            </div>
            <Link to="/" className="absolute top-20 left-20 back-button"><ArrowBackIosIcon/></Link>
            </div>}
        </div>
        
     );
}
 
export default ViewExpensesPage;