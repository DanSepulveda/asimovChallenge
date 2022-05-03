import { useContext } from 'react'
import AppContext from '../../context/AppContext'

const YearPicker = () => {
    const { currentDate, chosenDate, dispatch } = useContext(AppContext)

    // Pushing 10 elements to array of years
    let years = []
    for (let i = 0; i < 10; i++) years.push(currentDate.currentYear + i)

    // Generating months options for picker
    const options = years.map(year => <option key={year} value={year}>{year}</option>)

    return (
        <select
            value={chosenDate.year}
            onChange={(e) => {
                dispatch({ type: 'CHANGE_CHOSEN_DATE', payload: { ...chosenDate, day: 0, year: parseInt(e.target.value) } })
                dispatch({ type: 'CHANGE_CHOSEN_TIME', payload: null })
            }}
        >
            {options}
        </select>
    )
}

export default YearPicker