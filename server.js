if (process.env.NODE_ENV !== 'production') require('dotenv').config();
const User = require('./model/User')
// Important external libraries
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');


// Connect to DB 
mongoose.connect(
    process.env.MONGO_URL,
    { useUnifiedTopology: true },
    () => console.log('connected to db')
);

// Setting up PORT 
const port = process.env.PORT || 5000;

// Setting up Express
const app = express();

// Importing Routes
//const tests = require('./routes/tests');
const userRoute = require('./routes/user');
const patientRoute = require('./routes/patient');

// Adding middleware to express
app.use(bodyParser.json());
app.use(cors());

// Route Middlewares

app.use('/api/user', userRoute);
app.use('/api/patient', patientRoute);

// For Production: Delivering built client for all incoming requests
if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'build')));

    app.get('/*', function(req, res) {
        res.sendFile(path.join(__dirname, 'build', 'index.html'));
    })
}

// Starting Server
app.listen(port, error => {
    if (error) {
        throw error;
    }
    console.log('Server running on port:' + port); 
});
