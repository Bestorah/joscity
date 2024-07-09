const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

// Middleware
app.use(express.json());

// Routes
const ratingsRoutes = require('./routes/ratings');
const reviewsRoutes = require('./routes/reviews');

app.use('/ratings', ratingsRoutes);
app.use('/reviews', reviewsRoutes);

// Database connection
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

mongoose.connectDB  `A`.on('connected', () => {
  console.log('Connected to MongoDB');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


// import express from "express";
// import bodyParser from "body-parser";
// import dotenv from "dotenv";
// import cors from "cors";
// import {connectDB, User}from "./SRC/database/database.js";

// const mongoose = require('mongoose');

// dotenv.config();

// const app = express();

// app.use(cors({origin:"*"}))
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended:true}))
// app.use('/api', router)

// const StartServer = async () => {   const PORT = process.env.PORT;
//     try {
//     app.listen (PORT, () => {console.log(`Jcity app is running simultaneously on port ${PORT}`);}) } catch (error) {
//     console.log(error)
// }};
// StartServer();
// app.get("/", (req, res)=> {res.send('API IS RUNNING') })
