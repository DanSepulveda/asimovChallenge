import { useContext } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import AppContext from '../../context/AppContext'

const ButtonClose = () => {
    const { dispatch } = useContext(AppContext)

    return (
        <div
            className='mb-3 close-button'
            onClick={() => dispatch({ type: 'SCHEDULE' })}
        >
            <AiOutlineCloseCircle className='fs-1' />
        </div>
    )
}

export default ButtonClose