import express, {type Request, type Response } from 'express';
import { getAllBookings, createTaxiBooking, createTourBooking, deleteBooking, updateBooking } from './booking.service.ts';

const router = express.Router();

// get all
router.get('/', (req: Request, res: Response) => {
    getAllBookings(req, res);
});

// create taxi
router.post('/taxi', (req: Request, res: Response) => {
    createTaxiBooking(req, res);
});

// create tour
router.post('/tour', (req: Request, res: Response) => {
    createTourBooking(req, res);
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
