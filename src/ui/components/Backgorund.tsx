import { useState } from "react"
import {motion} from "motion/react"

interface Props {
    randomAnimOn:boolean
}

const Backgorund:React.FC<Props> = ({randomAnimOn}) => {

    const hoverFunction = function(index:number){
        randomCurrencyCharacter()
        setHoveredTile(index)
        
    }

    const [hoveredTile,setHoveredTile] = useState<number | null>(null)
    const [currencyCharacter,setCurrencyCharacter] = useState<string | null>("€")
    
    const randomNuumber = function():number{
        const num = Math.floor(Math.random()*10)
        if(num < 13 && num > 19){
            return randomNuumber()
        }
        
        return num
    }

    const randomCurrencyCharacter = function(){
        const characters = ["€","$","£","Ft","¥","¢","₩","₿","₱",]
        const randomNum = Math.floor(Math.random()*characters.length)
        const randomCharacter = characters[randomNum]
        setCurrencyCharacter(randomCharacter)
    }
    const printWithAnimation = function(numberOfCells:number){
        const tiles:JSX.Element[] = []
        for(let i = 0; i < numberOfCells; i++){
            const characters = ["€","$","£","Ft","¥","¢","₩","₿","₱",]
            const randomNum = Math.floor(Math.random()*characters.length)
            const currency = characters[randomNum]
            
            tiles.push(<div key={i} 
 
                className="grid-tile-x flex justify-center items-center text-2xl text-yellow-200">
                    {i%randomNuumber()  === 0 && i%randomNuumber() === 0 ? 
                    <motion.p
                    animate={{
                        rotateY:360,
                        translateY:[0,2,0,-2,0],
                        
                    }}
                    transition={{
                        duration:randomNuumber()*2,
                        repeat:Infinity,
                        repeatType:'loop',
                        ease: 'linear'
    
                    }}
                    >{currency}</motion.p> 
                :
                <motion.p
                animate={{
                    rotateY:360,
                    translateY:[0,2,0,-2,0],
                    
                }}
                transition={{
                    duration:2,
                    repeat:Infinity,
                    repeatType:'loop',
                    ease: 'linear'

                }}
                >{}</motion.p> 
                }
                </div>)
        }
        return tiles
    }
    const printGridX = function(numberOfCells:number){
        const tiles:JSX.Element[] = []
        for(let i = 0; i < numberOfCells; i++){
            tiles.push(<div key={i} 
                onMouseEnter={()=>hoverFunction(i)}
                onMouseLeave={()=>hoverFunction(-1)}

                className="grid-tile-x flex justify-center items-center text-2xl text-yellow-200">
                    {hoveredTile === i ? <motion.p
                    animate={{
                        rotateY:360,
                        translateY:[0,2,0,-2,0],
                        
                    }}
                    transition={{
                        duration:2,
                        repeat:Infinity,
                        repeatType:'loop',
                        ease: 'linear'
    
                    }}
                    
                    
                    >{currencyCharacter}</motion.p> : ""}
                </div>)
        }
        return tiles
    }
    // const printGridY = function(numberOfCells:number){
    //     const tiles:JSX.Element[] = []
    //     for(let i = 0; i < numberOfCells; i++){
    //         tiles.push (<div className="grid-tile-y"></div>)
    //     }
    //     return tiles
    // }

    // const printSideways = function(num:number){
    //     for(let i = 0; i < num; i++){
    //         printGridX(10)
    //     }   
    // }
    
    return ( 
        <div className="w-[100%] h-[100%] absolute grid-rows-10 z-0 max-w-[100vw] max-h-[100vh] overflow-hidden">
            <div className={`grid grid-cols-20 max-w-[100vw] max-h-[100vh] absolute`}>
                {randomAnimOn ? printWithAnimation(400) : printGridX(400)} 
            </div>
        </div>
     );
}
 
export default Backgorund;