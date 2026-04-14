import express, {type Request, type Response } from 'express';
import mongoose, { mongo, Mongoose } from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import { router as ApiRoutes } from './Routes/index.ts';
import { database } from '../config/database.ts';

//import nodemailer from nodemailer;


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


//Initialize express
const PORT = 3000;

//use JSON
app.use(express.json());


app.use('/', async (req, res) => {
    res.send("kkkk")

})

//Use api
app.use('/', ApiRoutes);

//email admin
const ADMIN_EMAIL = 'spaceship1268@gmail.com';

// Configure nodemailer transporter
// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'spaceship1268@gmail.com',
//         pass: 'your_email_password'
//     }
// });

// app.post('/book-tour', async (req: Request, res: Response) => {
//     const booking = req.body;

//     const adminMailOptions = {
//         from: booking.email,
//         to: ADMIN_EMAIL,
//         subject: 'New Booking Request',
//         html: `<h3> New Booking Details</h3>
//                <p>Service Type: ${booking.serviceType}</p>
//                ${booking.tourType ? `<p>Tour Type: ${booking.tourType} </p>` : ''}
//                ${booking.taxiType ? `<p>Taxi Type: ${booking.taxiType}</p>` : ''}
//                <p>Name: ${booking.name}</p>
//               <p> Email: ${booking.email}</p>
//               <p> Phone: ${booking.phone}</p>
//               <p> Date: ${booking.date}</p>
//                <p>Time: ${booking.time}</p>
//                <p> Passengers: ${booking.passengers}</p>`
                

//     };


//     const guestMailOptions = {
//         from: 'spaceship1268@gmail.com',
//         to: booking.email,
//         subject: 'Booking Confirmation',
//         html: `<h3>Thank you for booking!</h3>
//                 <p>We have received your booking with the following details:</p>
//                 <p>Service Type: ${booking.serviceType}</p>
//                 ${booking.tourType ? `<p>Tour Type: ${booking.tourType}</p>` : ''}
//                 ${booking.taxiType ? `<p>Taxi Type: ${booking.taxiType}</p>` : ''}
//                 <p>Name: ${booking.name}</p>
//               <p> Email: ${booking.email}</p>
//               <p> Phone: ${booking.phone}</p>
//               <p> Date: ${booking.date}</p>
//                <p>Time: ${booking.time}</p>
//                <p> Passengers: ${booking.passengers}</p>`
               
        
//         };


//         try {
//         await transporter.sendMail(adminMailOptions);
//         await transporter.sendMail(guestMailOptions);
//         res.json({ message: 'Emails sent successfully'});
//         } 

//         catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Failed to send emails'});
//         }
//     });   
    
    

mongoose.connect(database).then( () => {
    console.log('[SERVER STARTED ON ]', database)
});

//Listen to port 3000 
app.listen(PORT, () => {
    console.log('[SERVER STARTED ON PORT]:', PORT)
});



// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'YOUR_EMAIL@gmail.com',
//         pass: 'YOUR_PASSWORD'
//     }
// });
