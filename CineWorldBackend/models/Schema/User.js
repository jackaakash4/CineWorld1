import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    role:{type:String, emun:['admin', 'manager', 'customer']}
});

const User = mongoose.model('User', userSchema);
