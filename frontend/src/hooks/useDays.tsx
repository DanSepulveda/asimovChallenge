import { useDaysProps } from '../types'

const useDays = (props: useDaysProps) => {
    const { year, month } = props
    const firstDay = (new Date(year, month)).getDay()
    const daysQty = 32 - new Date(year, month, 32).getDate()
    let days = []

    for (let i = 0; i < firstDay; i++) {
        days.push(0)
    }

    for (let i = 1; i <= daysQty; i++) {
        days.push(i)
    }

    return days
}

export default useDays