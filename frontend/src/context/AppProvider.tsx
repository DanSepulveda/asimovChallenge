import axios from 'axios'
import { ReactNode, useReducer } from 'react'
import useDate from '../hooks/useDate'
import useDays from '../hooks/useDays'
import { Data } from '../types'
import AppContext from './AppContext'
import appReducer from './appReducer'

const AppProvider = (props: { children: ReactNode }) => {
    // Getting current date
    const currentDate = useDate()
    const { currentYear, currentMonth } = currentDate

    const initialValues = {
        open: false,
        chosenDate: {
            year: currentYear,
            month: currentMonth,
            day: 0
        },
        chosenTime: null,
        reserved: []
    }

    const [state, dispatch] = useReducer(appReducer, initialValues)
    const { open, chosenDate, chosenTime, reserved } = state

    // Number array to create calendar
    const days = useDays({ year: chosenDate.year, month: chosenDate.month })

    // String array with months of the year
    const monthsOfTheYear = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]

    const HOST = 'http://localhost:4000/api'

    const getScheduledAppointments = async (day: number) => {
        const date = `${chosenDate.year}-${chosenDate.month + 1}-${day}`
        const response = await axios.post(`${HOST}/available-appointments`, { date })
        dispatch({ type: 'RESERVED_HOURS', payload: response.data.reservedHours })

    }

    const schedule = async (data: Data) => {
        const response = await axios.post(`${HOST}/schedule`, data)
        if (response.data.success) return { success: true }
        else return response.data.error
    }

    return (
        <AppContext.Provider value={{
            open,
            reserved,
            chosenDate,
            chosenTime,
            currentDate,
            dispatch,
            days,
            monthsOfTheYear,
            schedule,
            getScheduledAppointments
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppProvider