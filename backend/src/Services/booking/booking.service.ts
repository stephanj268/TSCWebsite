import express, { type Request, type Response } from 'express';
import { BookingModule as TaxiBooking } from '../../Modules/booking/taxiModule.ts';
import { BookingModule as TourBooking } from '../../Modules/booking/tourModule.ts';
import type { IBooking } from './booking.model.ts';


export async function getAllBookings(req: Request, res: Response) {
    try {

        const allTaxiBookings = await TaxiBooking.find();
        const allTourBookings = await TaxiBooking.find();
        const allBookings = [allTaxiBookings, allTourBookings]
        res.status(200).json(allBookings);

    } catch (err) {
        res.status(500).json(err);
    }

}


export async function createTaxiBooking(req: Request, res: Response) {
    try {
        const newBooking = new TaxiBooking<IBooking>({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            phonenumber: req.body.phonenumber,
            maxPersons: req.body.maxPersons,
            serviceType: req.body.serviceType,
            taxiType: req.body.taxiType,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            createdAt: req.body.createdAt
        });

        if (!newBooking.firstname || !newBooking.lastname || !newBooking.email || !newBooking.phonenumber) {
            res.status(400).json(`Missing fields are empty!`)
            return
        }

        await newBooking.save();
        res.json(newBooking);


        // await transporter.sendMail({
        //     from: 'booking.email',
        //     to: 'admin@gmail.com',
        //     subject: 'New Tour Booking',
        //     text: 'New Booking',

        //     Date: ${ booking.date }
        //     Name: ${ booking.name }
        //     Email: ${ booking.email }
        //     Tour: ${ booking.tour }
        //     Pickup: ${ booking.pickup }
        //     Phone: ${ booking.phone }
        // });

    } catch (err) {
        res.status(400).json( {message: `Error Creating Booking: ${err}`});
    }

}

export async function getTaxiBooking(req: Request, res: Response) {

    const allbooking = await TaxiBooking.find();
    res.status(200).json(allbooking)
    
}

export async function updateTaxiBooking(id: any, req: Request, res: Response) {
    try {

        const booking = await TaxiBooking.findByIdAndUpdate(id, { $set: req.body })
        if (!booking) {
            res.status(400).json('booking not found!');
            return;
        }

        res.status(200).json(`Sucessfully Updated ${booking.firstname} ${booking.lastname}`);

    } catch (err) {
        res.status(400).json(`Error Updating ${id}`);
        throw err
    }

}


export async function deleteTaxiBooking(id: any, req: Request, res: Response) {
    try {

        const booking = await TaxiBooking.findByIdAndDelete(id)
        if (!booking) {
            res.status(400).json('booking not found!');
            return
        }

        res.json(`deleted ${booking.firstname} ${booking.lastname}`);

    } catch (err) {
        res.status(400).json(`Error Deleting booking`);
    }

}


// Tour Section 

export async function createTourBooking(req: Request, res: Response) {
    try {
        const newBooking = new TourBooking<IBooking>({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            phonenumber: req.body.phonenumber,
            maxPersons: req.body.maxPersons,
            serviceType: req.body.serviceType,
            tourType: req.body.tourType,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            createdAt: req.body.createdAt
        });

        if (!newBooking.firstname || !newBooking.lastname || !newBooking.email || !newBooking.phonenumber || !newBooking.serviceType || !newBooking.tourType) {
            res.status(400).json(`Missing fields are empty!`)
            return
        }

        await newBooking.save();
        res.json(newBooking);


        // await transporter.sendMail({
        //     from: 'booking.email',
        //     to: 'admin@gmail.com',
        //     subject: 'New Tour Booking',
        //     text: 'New Booking',

        //     Date: ${ booking.date }
        //     Name: ${ booking.name }
        //     Email: ${ booking.email }
        //     Tour: ${ booking.tour }
        //     Pickup: ${ booking.pickup }
        //     Phone: ${ booking.phone }
        // });

    } catch (err) {
        res.status(400).json( {message: `Error Creating Booking: ${err}`});
    }

}

export async function getTourBooking(req: Request, res: Response) {

    const allbooking = await TourBooking.find();
    res.status(200).json(allbooking)
    
}

export async function updateTourBooking(id: any, req: Request, res: Response) {
    try {

        const booking = await TourBooking.findByIdAndUpdate(id, { $set: req.body })
        if (!booking) {
            res.status(400).json('booking not found!');
            return;
        }

        res.status(200).json(`Sucessfully Updated ${booking.firstname} ${booking.lastname}`);

    } catch (err) {
        res.status(400).json(`Error Updating ${id}`);
        throw err
    }

}

export async function deleteTourBooking(id: any, req: Request, res: Response) {
    try {

        const booking = await TourBooking.findByIdAndDelete(id)
        if (!booking) {
            res.status(400).json('booking not found!');
            return
        }

        res.json(`deleted ${booking.firstname} ${booking.lastname}`);

    } catch (err) {
        res.status(400).json(`Error Deleting booking`);
    }

}