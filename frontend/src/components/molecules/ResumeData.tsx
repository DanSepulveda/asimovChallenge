import { FaSkull } from 'react-icons/fa'

const ResumeData = () => {
    return (
        <div className='d-flex'>
            <img src='/death.png' height={350} className='me-3' alt='Dancing with Death' />
            <div className='d-flex flex-column align-items-center'>
                <h1 className='mb-5'>Appointment Scheduled</h1>
                <p className='w-75 text-center mb-4'>Your appointment to dance with Death has been scheduled successfully</p>
                <p className='mb-5'>Good luck</p>
                <FaSkull style={{ 'fontSize': '60px' }} />
            </div>
        </div>
    )
}

export default ResumeData