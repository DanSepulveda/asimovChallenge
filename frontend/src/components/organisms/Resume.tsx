import ButtonClose from '../atoms/ButtonClose'
import ResumeData from '../molecules/ResumeData'

const Resume = () => {
    return (
        <div className='container-fluid resume-container d-flex justify-content-center align-items-center'>
            <div className='bg-light p-3 rounded-3 d-flex flex-column align-items-end'>
                <ButtonClose />
                <ResumeData />
            </div>
        </div>
    )
}

export default Resume