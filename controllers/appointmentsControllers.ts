import { Request, Response } from 'express'
import pool from '../config/database'
import { ResponseProps } from '../types'

const appointmentsControllers = {
    schedule: async (req: Request, res: Response) => {
        const { date, time, email } = req.body

        try {
            const appointment = await pool.query(`SELECT * FROM appointments WHERE date='${date}' AND time_from=${time}`)
            if (appointment.length) throw new Error('Appointment already reserved')

            const response = await pool.query(`INSERT INTO appointments VALUES(null, '${date}', '${email}', '${time}')`)
            return res.json({ response })
        } catch (error) {
            let message
            if (error instanceof Error) message = error.message
            else message = String(error)
            return res.json({ message })
        }
    },
    getScheduledByDate: async (req: Request, res: Response) => {
        try {
            const response = await pool.query(`SELECT time_from FROM appointments WHERE DATE='${req.body.date}' GROUP BY time_from`)
            const reservedHours = Array.from(response, (item: ResponseProps) => item.time_from)
            return res.json({ reservedHours })
        } catch (error) {
            let message
            if (error instanceof Error) message = error.message
            else message = String(error)
            return res.json({ message })
        }
    }
}

export default appointmentsControllers