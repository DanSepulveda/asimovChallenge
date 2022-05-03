import { GiDeathSkull } from 'react-icons/gi'

const H1 = (props: { children: string }) => {
    return (
        <h1 className='pt-4 pb-5 fs-2 text-center'>
            <GiDeathSkull className='me-4' />
            {props.children}
            <GiDeathSkull className='ms-4' />
        </h1>
    )
}

export default H1