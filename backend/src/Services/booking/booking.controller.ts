import express, {type Request, type Response } from 'express';
import { getAllBookings } from './booking.service.ts';

const router = express.Router();

// get all
router.get('', (req: Request, res: Response) => {
    getAllBookings(req, res);
});

export {router}
