import { useContext } from 'react'
import AppContext from '../context/AppContext'

const MonthPicker = () => {
    const { monthsOfTheYear, chosenDate, setChosenDate } = useContext(AppContext)

    return (
        <select
            value={chosenDate.month}
            onChange={(e) => setChosenDate({ ...chosenDate, day: 0, month: parseInt(e.target.value) })}
        >
            {monthsOfTheYear.map((month, index) =>
                <option key={month} value={index}>
                    {month}
                </option>
            )}
        </select>
    )
}

export default MonthPicker