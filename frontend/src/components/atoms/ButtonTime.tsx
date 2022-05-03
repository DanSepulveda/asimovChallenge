import { useContext } from 'react'
import AppContext from '../../context/AppContext'
import { ButtonTimeProps } from '../../types'

const ButtonTime = (props: ButtonTimeProps) => {
    const { hourName, hourValue } = props
    const { chosenTime, dispatch } = useContext(AppContext)

    const selected = hourValue === chosenTime ? 'selected-time ' : ''

    return (
        <div className='py-2 px-3'>
            <button
                className={`${selected}py-1 px-2 rounded`}
                onClick={() => dispatch({ type: 'CHANGE_CHOSEN_TIME', payload: hourValue })}>
                {hourName}
            </button>
        </div>
    )
}

export default ButtonTime