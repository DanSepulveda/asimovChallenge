import { useContext, useState } from 'react'
import AppContext from '../../context/AppContext'
import Input from '../atoms/Input'

const Form = () => {
    const [email, setEmail] = useState('')
    const { chosenDate, chosenTime, schedule } = useContext(AppContext)
    const { year, month, day } = chosenDate

    const date = `${day}/${month + 1}/${year}`

    const handleChange = (e: any): void => {
        setEmail(e.target.value)
    }

    const scheduleAppointment = (e: any) => {
        e.preventDefault()
        schedule({ date, time: chosenTime, email })
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