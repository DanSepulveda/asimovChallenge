import MonthPicker from './MonthPicker'
import YearPicker from './YearPicker'

const CalendarFooter = (): JSX.Element => {
    return (
        <div className='calendar-footer'>
            <p>Skip to: </p>
            <MonthPicker />
            <YearPicker />
        </div>
    )
}

export default CalendarFooter