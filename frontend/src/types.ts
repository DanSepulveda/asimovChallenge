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
    setChosenTime: React.Dispatch<React.SetStateAction<string>>,
    open: boolean,
    schedule: Function
}

export interface InputProps {
    label: string,
    value: string,
    type?: string,
    readonly?: boolean,
    disabled?: boolean,
    onChange?: any
}

export interface Data {
    date: string,
    time: string,
    email: string
}