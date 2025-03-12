/*
CMSC 100 - C1L
Author: Luthelle L. Fernandez
Student Number: 2023 - 12438
Date: March 12, 2025

EXERCISE 6
*/

// Import statements
import mongoose from 'mongoose';

// Structure of Student in Database
const Student = new mongoose.Schema({
    stdnum: { type: String, required: true, unique: true }, // Does not accept null and must be unique 
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    age: { type: Number, required: true }
}, { collection: 'studentData' }); //  collection name (in database)

// export statement
export default mongoose.model('Student', Student);