import express, {type Request, type Response } from 'express';

import { router as bookingRouter } from '../Services/booking/booking.controller.ts';

const router = express.Router()

router.use('booking', bookingRouter);

export {router};