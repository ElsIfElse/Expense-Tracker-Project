// import ExpenseCard from "../components/expenseCard";

import { Button, MobileStepper } from "@mui/material";
import PrintExpenseList from "../components/PrintExpenseList";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { useState } from "react";
import { useTheme } from '@mui/material/styles';
import PrintIncomeList from "../components/PrintIncomeList";
import { Link } from "react-router-dom";
import Backgorund from "../components/Backgorund";
import { motion } from "motion/react";
import { animation } from "../utils/animation";



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
        <div className=" w-[100vw] h-[100vh] flex flex-col items-center overflow-hidden">
          <MobileStepper
            variant="dots"
            steps={2}
            position="static"
            activeStep={activeStep}
            sx={{zIndex:10,".MuiMobileStepper-dot":{scale:1},marginTop:"96px", borderRadius: "6px",minWidth: 300,maxWidth: 300,maxHeight: 50,minHeight: 50, flexGrow: 1 ,backgroundColor: "rgb(10, 36, 114)",":hover":{backgroundColor: "rgba(26,67,191,0.6)"}}}
            nextButton={
              <Button size="small" onClick={handleNext} disabled={activeStep === 1} sx={{fontFamily:"Figtree",color:"white"}}>
                Income
                {theme.direction === 'rtl' ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button size="small" onClick={handleBack} disabled={activeStep === 0} sx={{fontFamily:"Figtree",color:"white"}}>
                {theme.direction === 'rtl' ? (
                  <KeyboardArrowRight sx={{":hover":{color:"black"}}}/>
                ) : (
                  <KeyboardArrowLeft />
                )}
                Expense
              </Button>
            }
            />
              {triggerShownList && <motion.div 
              variants={animation}
              animate = "animate"
              exit = "exit"
              className="w-[100vw] flex flex-col items-center z-10 overflow-hidden">
                  <div className="w-[60vw] flex flex-col items-center gap-2 max-h-[600px] py-12 z-10 ">
                      <div className="w-[100%] flex flex-col items-start z-10">
                          <h1>Income list</h1>
                      </div>
                      <PrintIncomeList/>
                  </div>
              </motion.div>}
              
              {!triggerShownList && <motion.div 
              variants={animation}
              animate = "animate"
              exit = "exit"
              className=" w-[100vw] flex flex-col items-center py-12 z-10 overflow-hidden">
                  <div className="w-[60vw] flex flex-col items-center gap-2 max-h-[600px] z-10 overflow-hidden">
                  <div className="w-[100%] flex flex-col items-start z-10">
                          <h1>Expense list</h1>
                      </div>
                      <PrintExpenseList/>
                  </div>
                  </motion.div>}
                  <Backgorund randomAnimOn={true}/>
                  <Link className="absolute top-20 left-20 back-button" to="/"><ArrowBackIosIcon sx={{color:"white"}}/></Link>

        </div>
        
     );
}
 
export default ViewExpensesPage;