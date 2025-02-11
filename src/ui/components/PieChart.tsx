import { PieChart } from '@mui/x-charts/PieChart';

interface PieObjectProps {
    category: string
    value: number
}

interface InputObjects {
    data: PieObjectProps[]
}

interface DataObject {
    id: number
    value: number
    label: string
}

const addData = function (list: PieObjectProps[]) {
    const newList: DataObject[] = []
    let id: number = 0
    list.forEach((element) => {
        const newObject: DataObject = { id: id, value: element.value, label: element.category }
        newList.push(newObject)
        id++
    })

    return newList
}

const PiChartElement: React.FC<InputObjects> = ({ data }) => {
    return (
        <>
            {data &&
                <PieChart
                slotProps={{
                    legend:{
                        labelStyle:{
                            fill: "white",
                            fontSize: "1rem"
                        }
                    },
                    pieArc:{
                        strokeWidth: 0
                    }
                    
                }}
                    colors={['red', 'blue', 'green', 'yellow', 'orange']}
                    sx={{
                        borderRadius: "6px",
                        backgroundColor: "rgb(10, 36, 114)",
                        padding: "6px",
                        margin: "0px",
                        zIndex: 10,
                        color: "white",
                    }}
                    series={[{
                        cx: '40%',
                        cy: '50%',
                        highlightScope: { fade: 'global', highlight: 'item' },
                        faded: { innerRadius: 45, additionalRadius: -5, color: 'gray' },
                        arcLabel: (item) => item.value === 0 || item.value === undefined || item.value === null || item.value.toString() === "NaN" ? "" : `${item.value}%`,
                        arcLabelRadius: 110,
                        data: [
                            ...addData(data),
                        ],
                        innerRadius: 45,
                        outerRadius: 90,
                        paddingAngle: 5,
                        cornerRadius: 5,
                        startAngle: 0,
                        endAngle: 360,
                    }]}
                    width={385}
                    height={200}
                />}
        </>
    );
}

export default PiChartElement;