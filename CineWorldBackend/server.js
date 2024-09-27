import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import rateLimit from 'express-rate-limit'

import connectDB from './Database.js'
dotenv.config()

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000,
	max: 100,
});

const app = express();
const port = process.env.PORT;

//Middleware
app.use(cors());
app.use(express.json());
app.use(limiter);
//database
connectDB();

//Basic route

app.get('/', (req, res) =>{
	res.send("Server is running");
});

app.get('/api/movies' , (req, res)=>{
	res.send("Movies are here");
})




app.listen(port, ()=>{
	console.log(`Server running on port ${port}`);
});

