import express, {type Request, type Response } from 'express';
import { getAllBookings, createBooking, deleteBooking, updateBooking } from './booking.service.ts';

const router = express.Router();

// get all
router.get('/', (req: Request, res: Response) => {
    getAllBookings(req, res);
});

// create
router.post('/', (req: Request, res: Response) => {
    createBooking(req, res);
});

router.put('/:id', (req: Request, res: Response) => {

    let id = (req.params.id)?.toString()

    if(id?.startsWith(":")){
        id = id.slice(1);
    } else {
        return
    }

    updateBooking(id, req, res);
});


// delete
router.delete('/:id', (req: Request, res: Response) => {
    let id = (req.params.id)?.toString()

    if(id?.startsWith(":")){
        id = id.slice(1);
    } else {
        return
    }

    deleteBooking(id, req, res);
});
export {router}
