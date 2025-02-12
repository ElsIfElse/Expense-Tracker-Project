import { Alert } from "@mui/material";
import {motion} from 'motion/react'

interface AlertMessageProps {
    message:string
}
const AlertMessage:React.FC<AlertMessageProps> = ({message}) => {
    return ( 
        <motion.div
        animate={{
            transform: ["translateX(-800px)","translateX(-660px)","translateX(-620px)","translateX(-600px)"],
            opacity:[0,0.9,1,0]
        }}
        transition={{
            times:[0,0.05,0.98,1],
            duration: 3,  
            ease: "easeInOut",

        }}
        className="z-10 absolute right-10/100 bottom-7"
        
        >
            <Alert sx={{zIndex:1000,fontSize:"1rem"}} variant="filled" severity="error">{message}</Alert>
        </motion.div>
     );
}
 
export default AlertMessage;