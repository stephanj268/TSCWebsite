import mongoose, { Schema } from 'mongoose'

const BookingSchema = new Schema({
    name: {
        type: String,
        required: true
    }
})


export const BookingModule = mongoose.model('booking', BookingSchema)