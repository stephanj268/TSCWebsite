import express, {type Request, type Response } from 'express';
import { getAllBookings, createBooking } from './booking.service.ts';

const router = express.Router();

// get all
router.get('', (req: Request, res: Response) => {
    getAllBookings(req, res);
});

router.post('', (req: Request, res: Response) => {
    createBooking(req, res);
});
export {router}
