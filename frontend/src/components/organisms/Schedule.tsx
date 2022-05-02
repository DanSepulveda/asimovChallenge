import H2 from '../atoms/H2'
import Hours from '../molecules/Hours'
import Column from '../templates/Column'

const Schedule = (): JSX.Element => {
    return (
        <Column>
            <H2 icon='clock'>2. Select a time</H2>
            <Hours />
        </Column>
    )
}

export default Schedule