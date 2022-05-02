import express from 'express'
import appointmentsControllers from '../controllers/appointmentsControllers'

const router = express.Router()

router.route('/schedule')
    .post(appointmentsControllers.schedule)

router.route('/available-appointments')
    .post(appointmentsControllers.getScheduledByDate)

export default router