import mongoose, { connect } from "mongoose";
import dotenv from "dotenv"
dotenv.config()


const password = encodeURIComponent(process.env.password);
const username = encodeURIComponent(process.env.username);
console.log(username +" "+ password);
const uri = `mongodb+srv://${username}:${password}@cluster0.4uo7v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;


const connectDB = async() =>{
    try{
        mongoose.set('strictQuery', true)
        await mongoose.connect(uri).then(()=>{
            console.log("mongodb connected..");
        })
    }catch(error){
        console.log(error.message);
    }
}

export default connectDB