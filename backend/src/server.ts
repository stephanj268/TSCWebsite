import express, {type Request, type Response } from 'express';
import mongoose, { mongo, Mongoose } from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import { router as ApiRoutes } from './Routes/index.ts';

import { database } from '../config/database.ts';




//Initialize express
const app = express();
const PORT = 3000;

app.use(cors());

//use JSON
app.use(express.json());


//Use api
app.use('', ApiRoutes);

mongoose.connect(database).then( () => {
    console.log('[SERVER STARTED ON ]', database)
})


//Listen to port 3000 
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
