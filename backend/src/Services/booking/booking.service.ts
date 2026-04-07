import express, {type Request, type Response } from 'express';

export function getAllBookings(req: Request, res: Response){
    try {
        res.send('dsas')

    } catch (err) {
        throw res.json(err);
    }

}