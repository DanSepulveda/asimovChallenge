import { useContext } from 'react'
import AppContext from '../../context/AppContext'

const CalendarHeader = (): JSX.Element => {
    const { chosenDate, monthsOfTheYear } = useContext(AppContext)
    const { year, month } = chosenDate
    const daysOfTheWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const monthAndYers = `${monthsOfTheYear[month]} ${year}`

    // Creating column titles (Sun, Mon, Tue...)
    const titles = daysOfTheWeek.map(day => <div className='width text-center fw-light' key={day}>{day}</div>)

    return (
        <div className='bg-red rounded-top'>
            <h3 className='fs-4 text-white text-center py-3'>{monthAndYers}</h3>
            <div className='d-flex pb-2 text-white'>
                {titles}
            </div>
        </div>
    )
}

export default CalendarHeader