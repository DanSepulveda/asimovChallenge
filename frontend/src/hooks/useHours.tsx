const useHours = (officeHours: { from: number, to: number }) => {
    const { from, to } = officeHours

    let hours = []

    function formatTime(number: number) {
        return number < 10 ? `0${number}:00` : `${number}:00`
    }

    for (let i = from; i <= to; i++) {
        hours.push(`${formatTime(i)}-${formatTime(i + 1)}`)
    }

    return hours
}

export default useHours