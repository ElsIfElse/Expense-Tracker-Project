import { Divider, List, ListItem, ListItemText } from "@mui/material";
import IconPicker from "./IconChooser";

interface IncomeCardProps{
    title:string,
    amount:number,
    info?:string,
    date?:string | null,
    category:string
}


const IncomeCard:React.FC<IncomeCardProps> = ({title,amount,date,category}) => {


    return ( 
        <List sx={{ width: '50vw', maxWidth: 360, bgcolor: 'background.paper' }}>
             <ListItem sx={{width:"100%"}} alignItems="flex-start">
                <ListItemText sx={{display:"flex",flexDirection:"row",gap:"15px",alignItems:"center",width:"100%"}} 
                    primary={<IconPicker category={category}/>
                }
                secondary={
                    <div className="w-[100%]">
                        <p className="text-base">{title}</p>
                        <p className="text-sm">{date}</p>
                        <p className="text-sm font-extrabold">€{amount}</p>
                    </div>
                }
                />
                
             </ListItem>
            <Divider variant="inset" component="li" />
        </List>
     );
}
 
export default IncomeCard;