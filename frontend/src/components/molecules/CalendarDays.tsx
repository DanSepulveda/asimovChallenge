import { useContext } from 'react'
import AppContext from '../../context/AppContext'
import DayBox from '../atoms/DayBox'

const CalendarDays = () => {
    const { days } = useContext(AppContext)

    // Creating cell for each day
    const cells = days.map((day, index) => <DayBox key={index} day={day} />)

    return (
        <div className='calendar-days d-flex flex-wrap bg-light'>
            {cells}
        </div>
    )
}

export default CalendarDays