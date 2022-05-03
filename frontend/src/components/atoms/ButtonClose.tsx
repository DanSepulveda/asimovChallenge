import { useContext } from 'react'
import AppContext from '../../context/AppContext'
import { AiOutlineCloseCircle } from 'react-icons/ai'

const ButtonClose = () => {
    const { dispatch } = useContext(AppContext)

    return (
        <div
            className='mb-3 close-button'
            onClick={() => dispatch({ type: 'HANDLE_RESUME', payload: false })}
        >
            <AiOutlineCloseCircle className='fs-1' />
        </div>
    )
}

export default ButtonClose