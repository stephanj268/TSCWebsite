import mongoose, { Schema } from 'mongoose'

const BookingSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    tour: {
        type: String,
        required: true
    },

    pickup: {
        type: String,
        required: true
    },

    phone: {
        type: String,
        required: true

    },
    
    date: {
        type: String,
        required: true
    }
})


export const BookingModule = mongoose.model('booking', BookingSchema)