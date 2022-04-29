import { useContext } from 'react'
import AppContext from '../context/AppContext'

const YearPicker = () => {
    let years = []
    const { currentYear, chosenDate, setChosenDate } = useContext(AppContext)

    for (let i = 0; i < 10; i++) {
        years.push(currentYear + i)
    }

    return (
        <select
            value={chosenDate.year}
            onChange={(e) => setChosenDate({ ...chosenDate, day: 0, year: parseInt(e.target.value) })}

        >
            {years.map(year =>
                <option key={year} value={year}>
                    {year}
                </option>
            )}
        </select>
    )
}

export default YearPicker