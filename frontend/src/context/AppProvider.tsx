// import axios from 'axios'
// import { useReducer } from 'react'
// import userReducer from './userReducer'
import { ReactNode, useState } from 'react'
import useDate from '../hooks/useDate'
import useDays from '../hooks/useDays'
import AppContext from './AppContext'

const AppProvider = (props: { children: ReactNode }) => {
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

    const [chosenTime, setChosenTime] = useState('09:00-10:00')
    // const [userState, dispatch] = useReducer(userReducer, { name: null, token: null })

    // const login = async (credentials: UserProps) => {
    //     try {
    //         const response = await axios.post(`${HOST}/login`, credentials)
    //         if (response.data.response) {
    //             dispatch({ type: "LOGIN", payload: response.data.response })
    //             return response.data
    //         }
    //     } catch (error: any) {
    //         return error.message
    //     }
    // }

    // const getAllCalls = async (token: string) => {
    //     try {
    //         const response = await axios.get(`${HOST}/calls`, {
    //             headers: {
    //                 Authorization: token
    //             }
    //         })
    //         if (response.data.success) {
    //             return response.data
    //         }
    //         throw new Error()
    //     } catch (error: any) {
    //         return error.message
    //     }
    // }

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
            setChosenTime
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppProvider