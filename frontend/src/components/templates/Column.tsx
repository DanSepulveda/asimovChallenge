import { ReactNode } from 'react'

const Column = (props: { children: ReactNode }) => {
    return (
        <div className='col-4 px-5'>
            {props.children}
        </div>
    )
}

export default Column