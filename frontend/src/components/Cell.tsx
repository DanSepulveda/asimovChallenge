const Cell = (props: { number: number }): JSX.Element => {
    return (
        <div className='cell'>
            {props.number !== 0 && props.number}
        </div>
    )
}

export default Cell