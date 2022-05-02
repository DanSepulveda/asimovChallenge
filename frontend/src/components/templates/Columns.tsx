import { ReactNode } from 'react'

const Columns = (props: { children: ReactNode }): JSX.Element => {
    return (
        <section className='container'>
            <div className='row align-items-start'>
                {props.children}
            </div>
        </section>
    )
}

export default Columns