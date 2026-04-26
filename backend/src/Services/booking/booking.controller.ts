import express, {type Request, type Response } from 'express';
import { getAllBookings, getTaxiBooking, createTaxiBooking, deleteTaxiBooking, updateTaxiBooking } from './booking.service.ts';
import { createTourBooking, getTourBooking, updateTourBooking, deleteTourBooking } from './booking.service.ts';

const router = express.Router();

// get all taxi
router.get('/taxi', (req: Request, res: Response) => {
    getAllBookings(req, res);
});

// create taxi
router.post('/taxi', (req: Request, res: Response) => {
    createTaxiBooking(req, res);
});


router.put('taxi/:id', (req: Request, res: Response) => {

    let id = (req.params.id)?.toString()

    if(id?.startsWith(":")){
        id = id.slice(1);
    } else {
        return
    }

    updateTaxiBooking(id, req, res);
});

// delete taxi
router.delete('taxi/:id', (req: Request, res: Response) => {
    let id = (req.params.id)?.toString()

    if(id?.startsWith(":")){
        id = id.slice(1);
    } else {
        return
    }

    deleteTaxiBooking(id, req, res);
});


//////////////////////////////////////////////////////////////////////


// get all tour
router.get('/tour', (req: Request, res: Response) => {
    getTourBooking(req, res);
});

// create tour
router.post('/tour', (req: Request, res: Response) => {
    createTourBooking(req, res);
});


router.put('tour/:id', (req: Request, res: Response) => {

    let id = (req.params.id)?.toString()

    if(id?.startsWith(":")){
        id = id.slice(1);
    } else {
        return
    }

    updateTourBooking(id, req, res);
});

// delete tour
router.delete('tour/:id', (req: Request, res: Response) => {
    let id = (req.params.id)?.toString()

    if(id?.startsWith(":")){
        id = id.slice(1);
    } else {
        return
    }

    deleteTourBooking(id, req, res);
});

export {router}
