import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
    booking: {type: mongoose.Schema.Types.ObjectId, ref:'Booking'},
    amount: Number,
    status:{type: String, enum:['paid', 'pending'], default:'pending'}
});

const Payment = mongoose.model('Payment', paymentSchema);

export default Payment