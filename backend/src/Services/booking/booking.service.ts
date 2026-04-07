import express, { type Request, type Response } from 'express';
import { BookingModule } from '../../Modules/bookingModule.ts';


export async function getAllBookings(req: Request, res: Response) {
    try {

        const allBookings = await BookingModule.find();
        res.json(allBookings);

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
    throw res.json(err);
}

}