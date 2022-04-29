import { useContext } from "react"
import AppContext from "../context/AppContext"

const Schedule = (): JSX.Element => {
    const { chosenDate } = useContext(AppContext)
    const { day, month, year } = chosenDate
    return (
        <section>
            {`${day}/${month}/${year}`}
        </section>
    )
}

export default Schedule