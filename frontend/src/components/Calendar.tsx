import { useState } from "react"
import Cell from "./Cell"

const Calendar = () => {
    const [day, setDay] = useState()
    const [month, setMonth] = useState()
    const [year, setYear] = useState()

    let lala = [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

    return (
        <div className='calendar'>
            {
                lala.map((lolo, index) => <Cell number={lolo} key={index} />)
            }
        </div>
    )
}

export default Calendar