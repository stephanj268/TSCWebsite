import mongoose, { Schema } from 'mongoose'
import { type IBooking } from '../../Services/booking/booking.model.ts';

const BookingSchema = new Schema<IBooking>({

  firstname: {
    type: String,
    required: true
  },

  lastname: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true
  },

  phonenumber: {
    type: String,
  },

  maxPersons: {
    type: Number,
    required: true
  },

  serviceType: {
    type: String,
    required: true
  },

  startDate: {
    type: Date,
    required: true
  },

  tourType: {
    type: String,
    required: true
  },

  endDate: {
    type: Date,
    required: true
  },

});


export const BookingModule = mongoose.model('tourbooking', BookingSchema)