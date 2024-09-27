import express from "express"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()
import connectDB from './Database.js'

const app = express();
const port = process.env.PORT;

//Middleware
app.use(cors());
app.use(express.json());

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

