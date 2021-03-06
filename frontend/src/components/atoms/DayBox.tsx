import { useContext } from 'react'
import AppContext from '../../context/AppContext'

const DayBox = (props: { day: number }) => {
    const { chosenDate, currentDate, getScheduledAppointments, dispatch } = useContext(AppContext)
    const { currentDay, currentMonth, currentYear } = currentDate
    const { day, year, month } = chosenDate

    let className
    if (props.day === 0) {
        className = 'disabled-day'
    } else if (year < currentYear) {
        className = 'inactive-day'
    } else if (year > currentYear) {
        className = 'active-day'
    } else {
        if (month < currentMonth) {
            className = 'inactive-day'
        } else if (month > currentMonth) {
            className = 'active-day'
        } else {
            if (props.day < currentDay) {
                className = 'inactive-day'
            } else {
                className = 'active-day'
            }
        }
    }

    const selected = day === props.day ? ' selected-day' : ''

    return (
        <div
            className={`${className}${selected} width text-center py-2 fs-5 border-end border-bottom`}
            style={{ 'userSelect': 'none' }}
            onClick={async () => {
                await getScheduledAppointments(props.day)
                dispatch({ type: 'CHANGE_CHOSEN_DATE', payload: { ...chosenDate, day: props.day } })
                dispatch({ type: 'CHANGE_CHOSEN_TIME', payload: null })
            }}
        >
            {props.day !== 0 && props.day}
            <div className='custom-tooltip rounded-3 p-1 fs-6'></div>
        </div>
    )
}

export default DayBox