import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import HouseIcon from '@mui/icons-material/House';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import WorkIcon from '@mui/icons-material/Work';
import CasinoIcon from '@mui/icons-material/Casino';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

interface IconPickerProps{
    category:string
}

const IconPicker:React.FC<IconPickerProps> = ({category}) => {

    const pickIconBasedOnCategory = function(category:string){
    
        switch(category){
            case "salary":
                return <WorkIcon sx={{scale:1.5}} />
                break;
            case "gift":
                return <CardGiftcardIcon sx={{scale:1.5}}  />
                break;
            case "rent":
                return <HouseIcon sx={{scale:1.5}} />
                break;
            case "misc":
                return <MiscellaneousServicesIcon sx={{scale:1.5}}  />
                break;
            case "entertainment":
                return <CasinoIcon sx={{scale:1.5}}  />
                break;
            case "transportation":
                return <DirectionsBusIcon sx={{scale:1.5}}  />
                break
            case "groceries":
                return <LocalGroceryStoreIcon sx={{scale:1.5}}  />
                break
            case "health":
                return <LocalHospitalIcon sx={{scale:1.5}}  />
                break
            
        }
    }

    return ( 
        <div className='flex justify-center items-center rounded-full p-5 bg-[#A1E3F9]'>
            {
                pickIconBasedOnCategory(category)
            }
        </div>
     );
}
 
export default IconPicker;