const Message = (props: Props) => {
    return (
        <div className='bg-light rounded text-center py-5 w-100'>
            {props.children}
        </div>
    )
}

export default Message

interface Props {
    children: string
}