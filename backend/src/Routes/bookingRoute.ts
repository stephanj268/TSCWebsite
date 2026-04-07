import express, {response, type Request, type Response } from 'express';
import { getAllBookings } from '../Services/booking/booking.service.ts';
const router = express.Router()

router.get('/', (req: Request, res: Response) => {
    getAllBookings(req, res);
})

export {router};