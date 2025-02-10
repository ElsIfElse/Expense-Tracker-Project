import { useEffect, useState } from "react"
import { getIncomes, Income } from "../utils/storeApi"
// import IncomeCard from "./incomeCard";
import IncomeCard2 from "./incomeCard2";

const PrintIncomeList = () => {

    const [incomes,setIncomes] = useState<Income[]>([])



    useEffect(()=>{
        const incomeSetter = async function(){
            const incomeList:Income[] = await getIncomes()
            setIncomes(incomeList) 
        }
        incomeSetter()
    },[])

    return ( 
        <div 
        className=" flex flex-col w-[60vw] min-w-[400px] max-h-[600px] overflow-auto rounded-sm gap-2"
        style={{scrollbarWidth: "thin",scrollbarColor: "#A1E3F9 white"}}
        >
            {incomes && incomes.map((income)=>(
                <div className="w-[100%] max-h[330px] flex flex-col border-none outline-none" key={income.id}>
                    <IncomeCard2 title={income.title} amount={income.amount} info={income.info} category={income.category} date={income.date || ""}/>
                </div>
            ))}
        </div>
     );

}
export default PrintIncomeList;