const express = require('express');
const http = require('http');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');

const PORT = process.env.PORT || process.env.API_PORT;

const app = express();
app.use(express.json());
app.use(cors());

// Register the Routes
app.use("/api/auth", authRoutes);

const server = http.createServer(app);

mongoose
    .connect(process.env.MONGO_URI)
    .then(()=> {
        server.listen(PORT, ()=>{
            console.info(`Server is listening at ${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Database connection failure');
        console.error(err);
    });