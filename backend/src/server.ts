import express, {type Request, type Response } from 'express';
import { Mongoose } from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

//import nodemailer from 'nodemailer';

import { router as ApiRoutes } from './Routes/index.ts';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
// dotenv.config();


app.use('', ApiRoutes);

app.listen(PORT, () => {
    console.log('[SERVER STARTED ON PORT]:', PORT)
})



// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'YOUR_EMAIL@gmail.com',
//         pass: 'YOUR_PASSWORD'
//     }
// });

// app.post('/book-tour', (req: Request, res: Response) => {
//     const booking: Booking = req.body;

//     try {

//         await transporter.sendMail({
//             from: 'booking.email,
//             to: 'admin@gmail.com,
//             subject: `New Tour Booking',
//             text: 
//             New Booking:

//             Date: ${booking.date}
//             Name: ${booking.name}
//             Email: ${booking.email}
//             Tour: ${booking.tour}
//             Pickup: ${booking.pickup}
//             Phone: ${booking.phone}
//         });
