import express, {type Request, type Response } from 'express';

import { router as bookingRouter } from './bookingRoute.ts';

const router = express.Router()

router.use('/booking', bookingRouter);

export {router}