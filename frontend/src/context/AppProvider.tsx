// import axios from 'axios'
import { ReactNode, useReducer, useState } from 'react'
import useDate from '../hooks/useDate'
import useDays from '../hooks/useDays'
import { Data } from '../types'
import AppContext from './AppContext'

const AppProvider = (props: { children: ReactNode }) => {
    const reducer = (state: { open: boolean }, action: { type: string, payload?: any }) => {
        const { type } = action
        switch (type) {
            case 'SCHEDULE':
                return {
                    open: !state.open
                }
            default:
                return state
        }
    }
    const [state, dispatch] = useReducer(reducer, { open: false })

    // Getting current date
    const currentDate = useDate()
    const { currentYear, currentMonth, currentDay } = currentDate

    // Setting up user date selection. By default is setted up to current month and year
    const [chosenDate, setChosenDate] = useState({ year: currentYear, month: currentMonth, day: 0 })

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

    const [chosenTime, setChosenTime] = useState('')

    const schedule = async (data: Data) => {
        try {
            console.log(data)
            // const response = await axios.post('', data)
            // if (response.data.response) {
            dispatch({ type: 'SCHEDULE' })
            setChosenDate({ year: currentYear, month: currentMonth, day: 0 })
            setChosenTime('')
            // }
        } catch (error: any) {
            return error
        }
    }

    return (
        <AppContext.Provider value={{
            currentDate,
            currentYear,
            currentMonth,
            currentDay,
            days,
            monthsOfTheYear,
            chosenDate,
            setChosenDate,
            chosenTime,
            setChosenTime,
            open: state.open,
            schedule,
            dispatch
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppProvider