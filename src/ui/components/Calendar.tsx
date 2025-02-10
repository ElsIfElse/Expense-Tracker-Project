import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from "@mui/x-date-pickers";

const CalendarInputComponent = () => {
    return ( 
        <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar sx={{width:"100%",height:"100%"}}/>
            </LocalizationProvider>
        </div>
     );
}
 
export default CalendarInputComponent;


