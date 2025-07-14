import { User } from "../models/User.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


//sign up
export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body
        if (!name || !email || !password) {
            return res.status(400).json({
                message: "All fields are required.",
                success: false
            })
        }
        const userExists = await User.findOne({ email })
        if (userExists) {
            return res.status(409).json({
                message: "User already exists.",
                success: false
            })
        }
        //hash password
        const hashedPassword = await bcrypt.hash(password, 15)
        const newUser = new User({
            name,
            email,
            password: hashedPassword
        })
        await newUser.save()
        res.status(201).json({
            message: "User registered successfully."
        })
       
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Server error. Please try again later.' });
    }
}

//login
export const login = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({
                error: 'Email and password are required.'
            });
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({
                error: 'Invalid email or password.'
            });
        }
        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({
                error: 'Invalid email or password.'
            });
        }

        const tokenData = {
            userId: user._id,
            userEmail: user.email
        }
        //generate jwt token
        const token = jwt.sign(tokenData, process.env.SECRET_KEY, { expiresIn: '7d' })
        //send token in cookies
        res.cookie('token', token, { httpOnly: true, maxAge: 7 * 24 * 60 * 60 * 1000, secure: process.env.NODE_ENV === 'production', sameSite: 'strict', }).status(200).json({
            message: `Welcome back ${user.name}`,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
            },
            success: true
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Server error. Please try again later.' });
    }

}

