import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import IconPicker from './IconChooser';

interface ExpenseCardProps{
  title:string,
  amount:number,
  info:string,
  category:string
  date:string
  image:string | null
}



const ExpenseCard:React.FC<ExpenseCardProps> = ({title,amount,info,category,date,image}) => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => { 
    setOpen(false);
  };

    return ( 
        <div className='w-[60vw] overflow-auto'>
              <Accordion sx={{width: "100%"}}>
                <AccordionSummary
                  expandIcon={< ArrowDownwardIcon/>}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  sx={{width: "100%"}}
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
                <div className='flex flex-col gap-2 w-[50%]  pt-8'>

                  <div className='flex flex-row gap-10'>
                    <span className='span'>Category: </span>
                    {category === "" ? <p className='text-red-500 uppercase'>No Category</p> : <p className='capitalize'>{category}</p>}
                  </div>

                  <div className='flex flex-row gap-10'>
                    <span className='span'>Expense Description: </span>
                    { info === "" ? <p className='text-red-500 uppercase'>No Description</p> : <p>{info}</p>}
                  </div>
                </div>

                <div className='flex flex-col items-center justify-start w-[50%] '>
                  {image !==null ? <button onClick={handleOpen}><img className='aspect-4/3 max-w-[160px] max-h-[120px]' src={image} alt="" /></button>
                  :
                  <img className='aspect-4/3 max-w-[160px] max-h-[120px]' src="https://media.istockphoto.com/id/1352945762/vector/no-image-available-like-missing-picture.jpg?s=612x612&w=0&k=20&c=4X-znbt02a8EIdxwDFaxfmKvUhTnLvLMv1i1f3bToog=" alt="" />
                  }
                </div>
                <Modal open={open} onClose={handleClose}>
                  <div className='w-[100vw] h-[100vh] flex flex-col items-center justify-center gap-6'>
                    <button onClick={handleClose} 
                    className='bg-white rounded-xl px-5 py-2 shadow-sm
                                hover:-translate-y-0.5 hover:rotate-4 hover:shadow-md hover:bg-[#f3f3f3]
                                transition-all duration-150'>X</button>
                    {image !==null ? <img className='max-h-[90vh]' src={image} alt="" />
                    :
                    <img className='w-[45%] h-[60%]' src="https://media.istockphoto.com/id/1352945762/vector/no-image-available-like-missing-picture.jpg?s=612x612&w=0&k=20&c=4X-znbt02a8EIdxwDFaxfmKvUhTnLvLMv1i1f3bToog=" alt="" />  
                  }  
                  </div>
                </Modal>
              </div>
          
                </AccordionDetails>
              </Accordion>
        </div>
     );
}
 
export default ExpenseCard;