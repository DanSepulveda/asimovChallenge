import { useContext } from 'react'
import AppContext from '../context/AppContext'

const MonthPicker = (): JSX.Element => {
    const { monthsOfTheYear, chosenDate, setChosenDate } = useContext(AppContext)

    // Generating months options for picker
    const options = monthsOfTheYear.map((month, index) => <option key={month} value={index}>{month}</option>)

    return (
        <select
            value={chosenDate.month}
            onChange={(e) => setChosenDate({ ...chosenDate, day: 0, month: parseInt(e.target.value) })}
        >
            {options}
        </select>
    )
}

export default MonthPicker