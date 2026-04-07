import express, { type Request, type Response } from 'express';
import { BookingModule } from '../../Modules/bookingModule.ts';
import type { IBooking } from './booking.model.ts';
import { error } from 'node:console';


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

        const newBooking = new BookingModule({
            name: req.body.name,
            email: req.body.email,
            tour: req.body.tour,
            pickup: req.body.pickup,
            phone: req.body.phone,
            date: req.body.date
        });

        if (!newBooking.name) {
            res.status(400).json(`Name field is empty`)

            throw new Error('hhhh');

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
        res.status(400).json('Error Creating Booking');
    }

}

export async function updateBooking(id: any, req: Request, res: Response) {
    try {

        const booking = await BookingModule.findByIdAndUpdate(id, { $set: req.body })
        if (!booking) {
            res.status(400).json('booking not found!');
            return;
        }

        res.json(`Sucessfully Updated ${booking?.name}`);

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

        res.json(`deleted ${booking.name}`);

    } catch (err) {
        res.status(400).json('Error Deleting Booking');
    }

}