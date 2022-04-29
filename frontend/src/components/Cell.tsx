import { useContext } from 'react'
import AppContext from '../context/AppContext'

const Cell = (props: { day: number }): JSX.Element => {
    const { chosenDate, setChosenDate, currentDate } = useContext(AppContext)
    const { currentDay, currentMonth, currentYear } = currentDate
    const { day, year, month } = chosenDate

    let className
    if (props.day === 0) {
        className = 'disabledDay'
    } else if (year < currentYear) {
        className = 'inactiveDay'
    } else if (year > currentYear) {
        className = 'activeDay'
    } else {
        if (month < currentMonth) {
            className = 'inactiveDay'
        } else if (month > currentMonth) {
            className = 'activeDay'
        } else {
            if (props.day < currentDay) {
                className = 'inactiveDay'
            } else {
                className = 'activeDay'
            }
        }
    }

    let selected = day === props.day ? ' active' : ''

    return (
        <div className={`${className}${selected}`} onClick={() => setChosenDate({ ...chosenDate, day: props.day })}>
            {props.day !== 0 && props.day}
            <div className='tooltip'></div>
        </div>
    )
}

export default Cell