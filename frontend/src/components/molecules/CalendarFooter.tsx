import MonthPicker from '../atoms/MonthPicker'
import YearPicker from '../atoms/YearPicker'

const CalendarFooter = (): JSX.Element => {
    return (
        <div className='d-flex p-3 rounded-bottom bg-red'>
            <p className='me-4 fs-5 text-white'>Skip to: </p>
            <MonthPicker />
            <YearPicker />
        </div>
    )
}

export default CalendarFooter