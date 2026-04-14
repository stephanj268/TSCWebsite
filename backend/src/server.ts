import express, { type Request, type Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import { router as ApiRoutes } from './Routes/index.ts';
import { database } from '../config/database.ts';

//import nodemailer from nodemailer;

const app = express();
const PORT = 3000;

mongoose.connect(database);

mongoose.connection.on('connected', () => {
    console.log('[SERVER] CONNECTION TO ' + database + '🚀 ESTABLISHED');
});

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Use api
app.use('/', ApiRoutes);

//Listen to port 3000 
app.listen(PORT, () => {
    console.log('[SERVER STARTED ON PORT]:', PORT);
});



