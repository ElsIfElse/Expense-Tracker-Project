import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import { DialogActions, DialogContentText } from '@mui/material';
import { Link } from 'react-router-dom';

interface Props {
    triggerVisibility: ()=>void
    message:string
    showSecondButton:boolean
    refreshPage?:boolean
}




const DialogPopUp: React.FC<Props> = ({triggerVisibility,message,showSecondButton,refreshPage}) => {



    const handleClick=function(){
        triggerVisibility()
        if(refreshPage){
            window.location.reload()
        }
    }

    return ( 
            <Dialog  open={true}

                  sx={{
                    
                    margin:'0px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    m: 'auto',
                    width: 'fit-content',
                    backgroundColor: 'transparent',
                    '& .MuiDialog-paper': {
                      backgroundColor: 'rgba(10,36,114,0.5)',text:'white',backdropFilter: 'blur(5px)',fontFamily:'Figtree',color:'white',paddingBottom:"10px",paddingX:"10px"}
                  }}>
                <DialogTitle sx={{color:"white",fontFamily:'Figtree'}}>Success!</DialogTitle>
                <DialogContent>
                    <DialogContentText sx={{color:"white",fontFamily:'Figtree'}}>
                    {message}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    {showSecondButton ? <Link style={{fontFamily:'Figtree'}} to={"/viewExpensePage"} className='button text-sm text-black'>Go To List</Link> : null}
                    <button onClick={()=>handleClick()} style={{fontFamily:'Figtree'}} className='button text-sm ext-black'>Continue</button>
                </DialogActions>
            </Dialog>
     );

}
 
export default DialogPopUp;