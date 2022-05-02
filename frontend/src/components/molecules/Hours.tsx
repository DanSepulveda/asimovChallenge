import { useContext } from 'react'
import AppContext from '../../context/AppContext'
import useHours from '../../hooks/useHours'
import ButtonTime from '../atoms/ButtonTime'
import Message from '../atoms/Message'

const Hours = () => {
    // Getting string array with hours range
    const hours = useHours({ from: 9, to: 17 })
    // Generating one row for each hour range
    const buttons = hours.map(hour => <ButtonTime key={hour} hour={hour} />)

    // Conditional for only show rows when date is selected
    const { chosenDate } = useContext(AppContext)
    const showComponent = chosenDate.day === 0
        ? <Message>Please complete step 1</Message>
        : buttons

    return (
        <div className='d-flex flex-column align-items-center'>
            {showComponent}
        </div>
    )
}

export default Hours