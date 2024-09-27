import bcrypt from "bcryptjs"
import User from "../../models/User";

//Route for user registration
app.post('/api/auth/register', async(req, res)=>{
	const {username, password} = req.body;

	//hashing password
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(password, salt);

    //Create new user
    const user = new User({
        username,
        password: hashedPassword,
        role:'customer',
    })

    try{
        const savedUser = await user.save();
        res.json(savedUser);

    }catch(err){
        res.status(400).json({error: err.message});
    }
})