import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRouter from './routes/auth.js'
import usersRouter from './routes/users.js'
import hotelsRouter from './routes/hotels.js'
import roomsRouter from './routes/rooms.js'
import cookieParser from 'cookie-parser';
const app = express();
dotenv.config();
mongoose.set('strictQuery', false);

// MongoDB  Connection 
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
    } catch (error) {
        throw error;
    }
};

// Connected && Disconnected MongoDB
mongoose.connection.on("connected", ()=>{
    console.log("MongoDB Connected!");
})


// Middleware
app.use(cookieParser())
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/users", usersRouter);
app.use("/api/hotels", hotelsRouter);
app.use("/api/rooms", roomsRouter);

// Error handling
app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong!"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    })
})


app.listen(5000, ()=>{
    connect();
   console.log("Connected to backend!") 
})