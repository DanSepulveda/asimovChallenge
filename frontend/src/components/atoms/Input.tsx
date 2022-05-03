import { InputProps } from '../../types'

const Input = (props: InputProps): JSX.Element => {
    const { label, disabled, value, readonly, onChange, type, name } = props

    return (
        <div className='d-flex flex-column'>
            <label className='text-center fs-4' htmlFor={name}>{label}</label>
            <input
                type={type || 'text'}
                value={value}
                disabled={disabled}
                readOnly={readonly}
                onChange={onChange}
                className='text-center mb-3 fs-5 fw-light w-100'
                name={name}
                id={name}
            />
        </div>
    )
}

export default Input