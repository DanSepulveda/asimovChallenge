import { useContext } from "react"
import AppContext from "../context/AppContext"

const Schedule = (): JSX.Element => {
    const { chosenDate } = useContext(AppContext)
    const { day, month, year } = chosenDate
    return (
        <div>{`${day}/${month}/${year}`}</div>
    )
}

export default Schedule

// const Schedule = (props: Props) => {
//     return (
//         <div>{props.chosenDay}</div>
//     )
// }

// export default Schedule

// interface Props {
//     chosenDay: number;
// }