import { useContext } from 'react'
import AppContext from '../context/AppContext'
import Cell from './Cell'

const CalendarDays = (): JSX.Element => {
    const { days } = useContext(AppContext)

    // Creating cell for each day
    const cells = days.map((day, index) => <Cell key={index} day={day} />)

    return (
        <div className='calendar-days'>
            {cells}
        </div>
    )
}

export default CalendarDays