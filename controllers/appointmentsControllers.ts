import { Request, Response } from 'express'
import pool from '../config/database'

const appointmentsControllers = {
    schedule: async (req: Request, res: Response) => {
        const { date, time, email } = req.body

        try {
            const response = await pool.query(`INSERT INTO appointments VALUES(null, '${date}', '${email}', '${time}')`)
            if (!response.response.insertId) {
                throw new Error()
            }
            return res.json({ response })
        } catch (error) {
            return res.json({ error })
        }
    }
}

export default appointmentsControllers