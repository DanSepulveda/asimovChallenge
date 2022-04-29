import { useContext } from 'react'
import AppContext from '../context/AppContext'

const CalendarHeader = (): JSX.Element => {
    const { chosenDate, monthsOfTheYear } = useContext(AppContext)
    const { year, month } = chosenDate
    const daysOfTheWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const monthAndYers = `${monthsOfTheYear[month]} ${year}`

    // Creating column titles (Sun, Mon, Tue...)
    const titles = daysOfTheWeek.map(day => <div className='name' key={day}>{day}</div>)

    return (
        <div className='calendar-header'>
            <div className='calendar-title'>
                <h2>{monthAndYers}</h2>
            </div>
            <div className='calendar-dayName'>
                {titles}
            </div>
        </div>
    )
}

export default CalendarHeader