import { useContext } from 'react'
import AppContext from '../../context/AppContext'

const ButtonTime = (props: { hour: string }) => {
    const { hour } = props
    const { chosenTime, setChosenTime } = useContext(AppContext)

    const selected = hour === chosenTime ? 'selected-time ' : ''

    return (
        <div className='py-2 px-3'>
            {/* <div>{props.hour}</div> */}
            <button className={`${selected}py-1 px-2 rounded`} onClick={() => setChosenTime(hour)}>{hour}</button>
        </div>
    )
}

export default ButtonTime