const Message = (props: { children: string }) => {
    return (
        <div className='bg-light rounded text-center py-5 w-100'>
            {props.children}
        </div>
    )
}

export default Message