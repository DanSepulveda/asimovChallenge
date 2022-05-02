import { InputProps } from '../../types'

const Input = (props: InputProps) => {
    const { label, disabled, value, readonly, onChange, type } = props

    return (
        <div className='d-flex flex-column'>
            <label className='text-center fs-4'>{label}</label>
            <input
                type={type || 'text'}
                value={value}
                disabled={disabled}
                readOnly={readonly}
                onChange={onChange}
                className='text-center mb-3 fs-5 fw-light w-100'
            />
        </div>
    )
}

export default Input