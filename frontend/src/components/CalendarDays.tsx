import { useContext } from 'react'
import AppContext from '../context/AppContext'
import Cell from './Cell'

const CalendarDays = () => {
    const { days } = useContext(AppContext)

    return (
        <div className='calendar-days'>
            {
                days.map((day, index) =>
                    <Cell
                        key={index}
                        day={day}
                    />
                )
            }
        </div>
    )
}

export default CalendarDays