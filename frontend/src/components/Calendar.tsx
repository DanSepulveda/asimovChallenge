import CalendarHeader from './CalendarHeader'
import CalendarDays from './CalendarDays'
import CalendarFooter from './CalendarFooter'

const Calendar = (): JSX.Element => {

    return (
        <div className='calendar-container'>
            <CalendarHeader />
            <CalendarDays />
            <CalendarFooter />
        </div>
    )
}

export default Calendar