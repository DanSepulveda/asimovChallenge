import CalendarHeader from '../molecules/CalendarHeader'
import CalendarDays from '../molecules/CalendarDays'
import CalendarFooter from '../molecules/CalendarFooter'
import H2 from '../atoms/H2'
import Column from '../templates/Column'

const Calendar = (): JSX.Element => {

    return (
        <Column>
            <H2 icon='calendar'>1. Select a day</H2>
            <CalendarHeader />
            <CalendarDays />
            <CalendarFooter />
        </Column>
    )
}

export default Calendar