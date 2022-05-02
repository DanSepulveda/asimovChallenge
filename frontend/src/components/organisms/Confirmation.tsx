import H2 from '../atoms/H2'
import Column from '../templates/Column'
import Form from '../molecules/Form'
import { useContext } from 'react'
import AppContext from '../../context/AppContext'
import Message from '../atoms/Message'

const Confirmation = () => {
    const { chosenTime } = useContext(AppContext)

    const component = chosenTime
        ? <Form />
        : <Message>Please complete all previous steps</Message>

    return (
        <Column>
            <H2 icon='confirm'>3. Schedule appointment</H2>
            {component}
        </Column>
    )
}

export default Confirmation