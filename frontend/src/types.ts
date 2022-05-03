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

// CONTEXT
export interface ContextProps {
    open: boolean,
    reserved: any,
    chosenDate: DateProps,
    chosenTime: number,
    currentDate: CurrentDateProps,
    dispatch: any,
    days: number[],
    monthsOfTheYear: string[],
    schedule: Function,
    getScheduledAppointments: Function
}

export interface Data {
    date: string,
    time: string,
    email: string
}

export interface State {
    open: boolean,
    currentYear: number,
    currentMonth: number,
    currentDay: number
}

// COMPONENTS
export interface InputProps {
    label: string,
    value: string | number,
    type?: string,
    readonly?: boolean,
    disabled?: boolean,
    onChange?: any,
    name: string
}

export interface ButtonTimeProps {
    hourName: string,
    hourValue: number
}