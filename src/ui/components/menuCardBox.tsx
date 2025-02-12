import { motion} from 'motion/react'
import Tooltip from '@mui/material/Tooltip';
import { Fade } from '@mui/material';
import { Link } from 'react-router-dom';

type Placement = 'top-start' | 'top' | 'top-end' | 'right-start' | 'right' | 'right-end' | 'bottom-end' | 'bottom' | 'bottom-start' | 'left-end' | 'left' | 'left-start';

interface MenuCardBoxProps {
 navigationDirection:string  
 menuName:string 
 menuIcon:JSX.Element
 toolTipText:string,
 toolTipPlacement:Placement
}

const MenuCardBox:React.FC<MenuCardBoxProps> = ({navigationDirection,menuIcon,toolTipText,toolTipPlacement}) => {
    return ( 
        <Link to={navigationDirection}>
        <motion.p 
        
        whileHover={{scale: 1.03,backgroundColor: "rgba(26, 67, 191, 0.85)",cursor: "pointer",boxShadow: "0px 10px 2px #1A43BF"}}
        transition={{
            duration: 0.5,
            type: "spring", 
            stiffness: 500, 
            damping: 13,}}
        // href={navigationDirection}
        
        className="bg-[#123499] rounded-3xl flex flex-col items-center justify-center aspect-1/1 shadow-xl">

        <Tooltip 
        sx={{position:"absolute",zIndex:100,top:"50%",left:"50%"}}
        slots={{transition: Fade}} 
        slotProps={{
            
            tooltip:{
                style:{fontSize:'1rem',backgroundColor: "#3674B5",borderRadius:'5px',color:"white"}},
                transition: {timeout: 200},
                popper:{modifiers:[{
                    name: 'offset',
                    options: { offset: [20,20] }},
                    {
                        name: 'arrow',
                        options: {
                          element: '#arrow',
                        },
                    }
        ]}}}
        title={toolTipText} 
         
        placement={toolTipPlacement}
        >
            <motion.div 
            initial={{scale: 1,rotateZ: 0}}
            whileHover={{scale: [1,1.2,1.3,1.2,1.2],rotateZ: [0,0,5,-1,0]}}
            transition={{
                duration: 0.4,
            }}
            className='w-full h-full flex flex-col items-center justify-center z-50'>
                {menuIcon}
            </motion.div>
            </Tooltip>
        </motion.p>
        </Link>
     );
}
 
export default MenuCardBox;