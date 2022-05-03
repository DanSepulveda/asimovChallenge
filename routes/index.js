"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const appointmentsControllers_1 = __importDefault(require("../controllers/appointmentsControllers"));
const router = express_1.default.Router();
router.route('/schedule')
    .post(appointmentsControllers_1.default.schedule);
router.route('/available-appointments')
    .post(appointmentsControllers_1.default.getScheduledByDate);
exports.default = router;
