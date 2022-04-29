import { GiDeathSkull } from 'react-icons/gi'

const Title = (props: { children: string }): JSX.Element => {
    return (
        <h1>
            <GiDeathSkull className='icon-title' />
            {props.children}
            <GiDeathSkull className='icon-title' />
        </h1>
    )
}

export default Title