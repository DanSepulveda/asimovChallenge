import { useContext } from 'react'
import AppContext from '../../context/AppContext'
import { ButtonTimeProps } from '../../types'

const ButtonTime = (props: ButtonTimeProps) => {
    const { hourName, hourValue } = props
    const { chosenTime, dispatch, reserved } = useContext(AppContext)

    const selected = hourValue === chosenTime ? 'selected-time ' : ''

    const disabled = reserved.includes(hourValue) ? ' time-disabled' : ''

    return (
        <div className='py-2 px-3'>
            <button
                className={`${selected}py-1 px-2 rounded${disabled}`}
                onClick={() => {
                    if (!reserved.includes(hourValue)) dispatch({ type: 'CHANGE_CHOSEN_TIME', payload: hourValue })
                }}>
                {hourName}
            </button>
        </div>
    )
}

export default ButtonTime