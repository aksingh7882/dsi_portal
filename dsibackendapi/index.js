// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const userRoutes = require('./routes/userRoutes');

// const app = express();
// const PORT = 5000;

// mongoose.connect('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => console.log('MongoDB Connected'))
//   .catch(err => console.log(err));

// app.use(bodyParser.json());
// app.use('/api/users', userRoutes);

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });












































import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './router/user.router.js'




dotenv.config()

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connected to mongoDB");
}).catch((err)=>{
    console.log("error: " + err);
});

const app = express()
app.listen(5000, () =>{
    console.log("server is running port 5000");
});

app.use('/dsibackendapi/user/test', userRouter);

// app.get("/", (req,res)=>{
//   res.send("hello world")
// });

