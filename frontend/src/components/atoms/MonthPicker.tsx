import { useContext } from 'react'
import AppContext from '../../context/AppContext'

const MonthPicker = () => {
    const { monthsOfTheYear, chosenDate, dispatch } = useContext(AppContext)

    // Generating months options for picker
    const options = monthsOfTheYear.map((month, index) => <option key={month} value={index}>{month}</option>)

    return (
        <select
            value={chosenDate.month}
            onChange={(e) => {
                dispatch({ type: 'CHANGE_CHOSEN_DATE', payload: { ...chosenDate, day: 0, month: parseInt(e.target.value) } })
                dispatch({ type: 'CHANGE_CHOSEN_TIME', payload: null })
            }}
        >
            {options}
        </select>
    )
}

export default MonthPicker