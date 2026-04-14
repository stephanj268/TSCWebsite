import express, { type Request, type Response } from 'express';
import { BookingModule } from '../../Modules/bookingModule.ts';
import type { IBooking } from './booking.model.ts';


export async function getAllBookings(req: Request, res: Response) {
    try {

        const allBookings = await BookingModule.find();
        res.json(allBookings);


    } catch (err) {
        throw res.json(err);
    }

}

export async function createBooking(req: Request, res: Response) {
    try {
        const newBooking = new BookingModule<IBooking>({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            phonenumber: req.body.phonenumber,
            type: req.body.type,
            maxPersons: req.body.maxPersons,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            date: req.body.date,
        });

        if (!newBooking.firstname || !newBooking.lastname || !newBooking.email || !newBooking.phonenumber) {
            res.status(400).json(`Name field is empty`)
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

export async function updateBooking(id: any, req: Request, res: Response) {
    try {

        const booking = await BookingModule.findByIdAndUpdate(id, { $set: req.body })
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


export async function deleteBooking(id: any, req: Request, res: Response) {
    try {

        const booking = await BookingModule.findByIdAndDelete(id)
        if (!booking) {
            res.status(400).json('booking not found!');
            return
        }

        res.json(`deleted ${booking.firstname} ${booking.lastname}`);

    } catch (err) {
        res.status(400).json(`Error Deleting booking`);
    }

}