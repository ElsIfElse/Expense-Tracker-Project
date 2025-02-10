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
            <Dialog maxWidth='xl' open={true}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    m: 'auto',
                    width: 'fit-content',
                  }}>
                <DialogTitle>Success!</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                    {message}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    {showSecondButton ? <Link to={"/viewExpensePage"} className='button'>Go To List</Link> : null}
                    <button onClick={()=>handleClick()} className='button'>Cancel</button>
                </DialogActions>
            </Dialog>
     );

}
 
export default DialogPopUp;