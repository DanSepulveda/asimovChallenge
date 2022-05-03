"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../config/database"));
const appointmentsControllers = {
    schedule: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { date, time, email } = req.body;
        try {
            const appointment = yield database_1.default.query(`SELECT * FROM appointments WHERE date='${date}' AND time_from=${time}`);
            if (appointment.length)
                throw new Error('Appointment already reserved');
            const response = yield database_1.default.query(`INSERT INTO appointments VALUES(null, '${date}', '${email}', '${time}')`);
            return res.json({ success: true, response });
        }
        catch (error) {
            let message;
            if (error instanceof Error)
                message = error.message;
            else
                message = String(error);
            return res.json({ success: false, error: message });
        }
    }),
    getScheduledByDate: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield database_1.default.query(`SELECT time_from FROM appointments WHERE DATE='${req.body.date}' GROUP BY time_from`);
            const reservedHours = Array.from(response, (item) => item.time_from);
            return res.json({ reservedHours });
        }
        catch (error) {
            let message;
            if (error instanceof Error)
                message = error.message;
            else
                message = String(error);
            return res.json({ message });
        }
    })
};
exports.default = appointmentsControllers;
