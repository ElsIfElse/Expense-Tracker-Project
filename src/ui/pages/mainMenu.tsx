import MenuCardBox from "../components/menuCardBox";
// import { emptyStoreData, getStoreData } from "../utils/storeApi";
import ViewListRoundedIcon from '@mui/icons-material/ViewListRounded';
import PieChartRoundedIcon from '@mui/icons-material/PieChartRounded';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Backgorund from "../components/Backgorund";


const MainMenu = () => {

    return (  
        <div className="  w-[100vw] h-[100vh] flex flex-col items-center gap-10 p-20 justify-center">
                        <Backgorund randomAnimOn={false}/>
            <div className="grid grid-rows-2 grid-cols-2 aspect-1/1 gap-10 h-[80%] z-10">
                <MenuCardBox toolTipPlacement='top-start' toolTipText="Create Expense" menuIcon={<MoneyOffIcon sx={{width:'40%', height:'40%',color:"white"}} />} menuName="Add Expense" navigationDirection="/addExpensePage"/>
                <MenuCardBox toolTipPlacement='top-end' toolTipText="Add Income" menuIcon={<AttachMoneyIcon sx={{width:'40%', height:'40%',color:"white"}} />} menuName="Page 3" navigationDirection="/addIncomePage"/>

                <MenuCardBox toolTipPlacement='bottom-start' toolTipText="Check Expense List" menuIcon={<ViewListRoundedIcon sx={{width:'40%', height:'40%',color:"white"}} />} menuName="View Expenses" navigationDirection="/viewExpensePage"/>
                <MenuCardBox toolTipPlacement='bottom-end' toolTipText="Summary" menuIcon={<PieChartRoundedIcon sx={{width:'40%', height:'40%',color:"white"}} />} menuName="Page 4" navigationDirection="summaryPage"/>
            </div>
            {/* <button onClick={()=>emptyStoreData()} className="bg-slate-200 p-3 rounded-2xl">Empty Store Data</button>
            <button onClick={()=>getStoreData()} className="bg-slate-200 p-3 rounded-2xl">Get Store Data</button> */}
        </div> 
     );
}
  
export default MainMenu;