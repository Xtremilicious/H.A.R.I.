const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        max: 1024,
        min: 6
    },
    type: {
        type: String,
        required: true
    },
    createdAt: {
        type: String
    },
    treating: {
        type: [Number]
    }
}, {collection: 'Doctors'});

module.exports = mongoose.model('User', userSchema);