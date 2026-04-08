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

  phonenumber: {
    type: String,
  },
  type: {
    type: String,
    required: true
  },
  maxPersons: {
    type: Number,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  date: {
    type: String,
    required: true
  },
});


export const BookingModule = mongoose.model('booking', BookingSchema)