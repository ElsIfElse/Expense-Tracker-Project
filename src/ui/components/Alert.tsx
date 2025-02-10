import { Alert } from "@mui/material";
import {motion} from 'motion/react'

interface AlertMessageProps {
    message:string
}
const AlertMessage:React.FC<AlertMessageProps> = ({message}) => {
    return ( 
        <motion.div
        animate={{
            transform: ["translateX(-200px)","translateX(0px)","translateX(0px)","translateX(0px)"],
            opacity:[0,1,1,0]
        }}
        transition={{
            times:[0,0.05,0.98,1],
            duration: 3,  
            ease: "easeInOut",

        }}
        
        >
            <Alert variant="filled" severity="error">{message}</Alert>
        </motion.div>
     );
}
 
export default AlertMessage;