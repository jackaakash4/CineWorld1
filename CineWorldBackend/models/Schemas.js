import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    role:{type:String, emun:['admin', 'manager', 'customer']}
});

const movieSchema = new mongoose.Schema({
    title: String,
    genre: String,
    releaseDate: Date,
    availableTickets: Number,
    showtimes:[Date],
});

const bookingSchema = new mongoose.Schema({
    user:{type: mongoose.Schema.Types.ObjectId, ref:'User'},
    movie: {type: mongoose.Schema.Types.ObjectId, ref:'Movie'},
    showtimes: Date,
    ticketBooked: Number,
    status:{type:String, enum:['booked', 'cancelled'], default:'booked'}
});

const paymentSchema = new mongoose.Schema({
    booking: {type: mongoose.Schema.Types.ObjectId, ref:'Booking'},
    amount: Number,
    status:{type: String, enum:['paid', 'pending'], default:'pending'}
});


const User = mongoose.model('User', userSchema);
const Movie = mongoose.model('Movie', movieSchema);
const Booking = mongoose.model('Booking', bookingSchema);
const Payment = mongoose.model('Payment', paymentSchema);
