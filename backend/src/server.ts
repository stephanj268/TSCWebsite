import express, {type Request, type Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { tourRouter } from './routes/tourRoutes';
import nodemailer from 'nodemailer';

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

interface Booking {
    date: string;
    name: string;
    email: string;
    tour: string;
    pickup: string;
    phone: string;
}

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'YOUR_EMAIL@gmail.com',
        pass: 'YOUR_PASSWORD'
    }
});

app.post('/book-tour', (req: Request, res: Response) => {
    const booking: Booking = req.body;

    try {

        await transporter.sendMail({
            from: 'booking.email,
            to: 'admin@gmail.com,
            subject: `New Tour Booking',
            text: 
            New Booking:

            Date: ${booking.date}
            Name: ${booking.name}
            Email: ${booking.email}
            Tour: ${booking.tour}
            Pickup: ${booking.pickup}
            Phone: ${booking.phone}
        });
