import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    user:{type: mongoose.Schema.Types.ObjectId, ref:'User'},
    movie: {type: mongoose.Schema.Types.ObjectId, ref:'Movie'},
    showtimes: Date,
    ticketBooked: Number,
    status:{type:String, enum:['booked', 'cancelled'], default:'booked'}
});

const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;