import { useContext } from 'react'
import AppContext from '../context/AppContext'

const CalendarHeader = (): JSX.Element => {
    const { chosenDate, monthsOfTheYear } = useContext(AppContext)
    const { year, month } = chosenDate
    const daysOfTheWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    return (
        <div className='calendar-header'>
            <div className='calendar-title'>
                <h2>{`${monthsOfTheYear[month]} ${year}`}</h2>
            </div>
            <div className='calendar-dayName'>
                {daysOfTheWeek.map(day => <div className='name' key={day}>{day}</div>)}
            </div>
        </div>
    )
}

export default CalendarHeader