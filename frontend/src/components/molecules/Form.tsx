import { useContext, useState } from 'react'
import AppContext from '../../context/AppContext'
import Input from '../atoms/Input'

const Form = () => {
    const [email, setEmail] = useState('')
    const { chosenDate, chosenTime, schedule, dispatch, currentDate } = useContext(AppContext)
    const { currentYear, currentMonth } = currentDate
    const { year, month, day } = chosenDate

    const date = `${year}-${month + 1}-${day}`

    const handleChange = (e: any): void => {
        setEmail(e.target.value)
    }

    const scheduleAppointment = async (e: any) => {
        e.preventDefault()
        try {
            const response = await schedule({ date, time: chosenTime, email })
            if (response.success) {
                await dispatch({ type: 'HANDLE_RESUME', payload: true })
                await dispatch({ type: 'CHANGE_CHOSEN_DATE', payload: { year: currentYear, month: currentMonth, day: 0 } })
                await dispatch({ type: 'CHANGE_CHOSEN_TIME', payload: null })
                alert('correcto')
            } else {
                throw new Error(response)
            }
        } catch (error: unknown) {
            let message
            if (error instanceof Error) message = error.message
            else message = String(error)
            alert(message)
        }
    }

    return (
        <form className='bg-light rounded px-3 py-3 d-flex flex-column align-items-center'>
            <Input label='Date' value={date} disabled={true} readonly={true} />
            <Input label='Time' value={chosenTime} disabled={true} readonly={true} />
            <Input label='Email' value={email} onChange={(e: any) => handleChange(e)} type='email' />
            <button
                className='text-center py-1 px-2 mt-3 mb-2 rounded send-button'
                onClick={(e: any) => scheduleAppointment(e)}
            >
                Schedule
            </button>
        </form >
    )
}

export default Form