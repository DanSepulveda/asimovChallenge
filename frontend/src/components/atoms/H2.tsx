import { BsFillCalendarDateFill, BsFillClockFill, BsClipboardCheck } from 'react-icons/bs'

const H2 = (props: { children: string, icon: string }): JSX.Element => {
    const { children, icon } = props

    const icons: any = {
        calendar: <BsFillCalendarDateFill className='ms-3' />,
        clock: <BsFillClockFill className='ms-3' />,
        confirm: <BsClipboardCheck className='ms-3' />
    }

    const svg: JSX.Element = icons[icon]

    return (
        <h2 className='fs-4 mb-4'>
            {children}
            {svg}
        </h2>
    )
}

export default H2