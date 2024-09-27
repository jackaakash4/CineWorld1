import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../../models/User';
import dotenv, { config, configDotenv } from 'dotenv'
dotenv.config();

app.post('/api/auth/login', async(req, res)=>{
    const {username, password} = req.body;

    const user = await User.findOne({username});
    if(!user) return res.status(400).json({error:'User not found'});

    //compairing password
    const token = jwt.sign(
        {userId: user._id, role: user.role},
        process.env.JWT_SECRET,
        {expiresIn: '1h'}
    );
})