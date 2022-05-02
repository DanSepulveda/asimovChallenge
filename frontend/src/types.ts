import React from 'react'

export interface useDaysProps {
    year: number,
    month: number,
}

export interface DateProps extends useDaysProps {
    day: number
}

export interface CurrentDateProps {
    currentYear: number,
    currentMonth: number,
    currentDay: number
}

export interface ContextProps {
    currentYear: number,
    currentMonth: number,
    currentDay: number,
    monthsOfTheYear: string[],
    days: number[],
    chosenDate: DateProps,
    setChosenDate: React.Dispatch<React.SetStateAction<DateProps>>,
    currentDate: CurrentDateProps,
    chosenTime: string,
    setChosenTime: React.Dispatch<React.SetStateAction<string>>
}