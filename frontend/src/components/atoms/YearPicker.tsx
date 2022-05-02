import { useContext } from 'react'
import AppContext from '../../context/AppContext'

const YearPicker = () => {
    const { currentYear, chosenDate, setChosenDate, setChosenTime } = useContext(AppContext)

    // Pushing 10 elements to array of years
    let years = []
    for (let i = 0; i < 10; i++) years.push(currentYear + i)

    // Generating months options for picker
    const options = years.map(year => <option key={year} value={year}>{year}</option>)

    return (
        <select
            value={chosenDate.year}
            onChange={(e) => {
                setChosenDate({ ...chosenDate, day: 0, year: parseInt(e.target.value) })
                setChosenTime('')
            }}
        >
            {options}
        </select>
    )
}

export default YearPicker