const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    pulseData:{
        type: [Number]
    },
    ECGData: {
        type: [Number]
    },
    EMGData: {
        type: [Number]
    }
}) 

const patientSchema = new mongoose.Schema({
    id:{
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    pastMedicalHistory: {
        type: String,
        required: true
    },
    symptoms: {
        type: String,
        required: true
    },
    reportData:{
        type: reportSchema,
        required: true
    },
    createdAt: {
        type: String
    },
    beingTreated:{
        type: Boolean
    }
},{collection: 'Patients'});

module.exports = mongoose.model('Patient', patientSchema);