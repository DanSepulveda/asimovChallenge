import { ReactNode } from 'react'

const Columns = (props: Props): JSX.Element => {
    return (
        <section className='columns'>
            {props.children}
        </section>
    )
}

export default Columns

interface Props {
    children: ReactNode
}