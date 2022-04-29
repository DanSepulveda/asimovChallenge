const useDate = () => {
    const date = new Date()
    const currentDate = {
        currentDay: date.getDate(),
        currentMonth: date.getMonth(),
        currentYear: date.getFullYear()
    }

    return currentDate
}

export default useDate