import express, { type Request, type Response } from 'express';
import { BookingModule } from '../../Modules/bookingModule.ts';


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
            name: req.body.name
        });

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

    } catch(err) {
        res.status(400).json('Error Creating Booking');
    }
    
}