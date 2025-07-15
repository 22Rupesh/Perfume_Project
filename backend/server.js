import express from 'express'
const app = express();
import dotenv from "dotenv"
dotenv.config();
import cookieparser from 'cookie-parser';
import userRoutes from './routes/UserRoutes.js'
import cors from "cors"

import { connectDB } from './utils/db.js';


//middlewares
app.use(cookieparser())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())



//api
app.use('/user', userRoutes);


const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    connectDB()
    console.log(`Server running on PORT ${PORT}`);
})