import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import IconPicker from './IconChooser';

interface IncomeCardProps{
  title:string,
  amount:number,
  info:string,
  category:string
  date:string
}



const IncomeCard2:React.FC<IncomeCardProps> = ({title,amount,info,category,date}) => {


    return ( 
        <div className='w-[60vw]'>
              <Accordion className='card-bg-color' sx={{width: "100%" ,backgroundColor:"#0A2472",":hover":{backgroundColor: "rgba(26,67,191,0.6)"}}}>
                <AccordionSummary
                  expandIcon={< ArrowDownwardIcon sx={{color:"white"}}/>}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  className='card-bg-color'
                  sx={{width: "100%",backgroundColor:"#0A2472",":hover":{backgroundColor: "rgba(26,67,191,0.6)"}}}
                  >
                    <div className='w-full grid grid-cols-3 items-center'>
                      <div className='flex flex-row gap-2 items-center'>
                      <IconPicker category={category}/>
                        <h3>{title}</h3>          
                      </div>
                      <h3 className='flex-grow'>{amount}€</h3>
                      <h3 className='flex-grow'>{date}</h3>
                    </div>
                </AccordionSummary>
                <AccordionDetails>

              <div className='w-[100%] flex flex-row'>
                <div className='flex flex-col gap-2 w-[80%] pt-8'>

                  <div className='flex flex-row gap-10'>
                    <span className='span'>Category: </span>
                    {category === "" ? <p className='text-red-500 uppercase'>No Category</p> : <p className='text-white capitalize'>{category}</p>}
                  </div>

                  <div className='flex flex-row gap-10'>
                    <span className='span'> Description: </span>
                    { info === "" ? <p className='text-red-500 uppercase'>No Description</p> : <p className='text-white'>{info}</p>}
                  </div>
                </div>
              </div>
          
                </AccordionDetails>
              </Accordion>
        </div>
     );
}
 
export default IncomeCard2;