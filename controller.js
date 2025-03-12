/*
CMSC 100 - C1L
Author: Luthelle L. Fernandez
Student Number: 2023 - 12438
Date: March 12, 2025

EXERCISE 6
*/

// Import Statements
import mongoose from 'mongoose';
import Student from './Student.js';  
import {studentsData} from './data.js';

await mongoose.connect("mongodb://127.0.0.1:27017/StudentDatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// --------  SAVING DATA-------- //
// Save a Single Student
const saveStudent = async (req, res) => {
    res.json("New Student Data:", req.body);
    try {
        if (!req.body.stdnum || !req.body.fname || !req.body.lname || !req.body.age) {
            return res.json({ inserted: false, error: "Error: Incomplete student data" }); // error msg if not complete student data
          }

        const student = new Student(req.body);
        await student.save(); // save to database

        res.json({ inserted: true }); // Successfully inserted in Database 

  } catch (error) {
    res.json({ inserted: false, error: error.message });
  }
};

// Save Multiple Students
const saveManyStudents = async (req, res) => {
  try {
    await Student.insertMany(studentsData);
    res.json({ inserted: true });
  } catch (error) {
    res.json({ inserted: false, error: error.message });
  }
};

// --------  UPDATE DATA -------- //
// Update Info (Mary Jane)
const updateStudent = async (req, res) => {
    try {
      const { fname, newLname } = req.body; 
  
      if (!fname || !newLname) {
        return res.json({ updated: false, error: "Missing required data informations." });
      }
  
      const result = await Student.updateOne({ fname: fname }, { lname: newLname }); // update to database
      
      if (result.modifiedCount > 0) {
        res.json({ updated: true });
      } else {
        res.json({ updated: false, error: "Student not found." }); 
      }
    } catch (error) {
      res.json({ updated: false, error: error.message });
    }
};

// --------  DELETE DATA -------- //
// Remove Users
const removeUser = async (req, res) => {
  try {
    const { stdnum } = req.body; 

    if (!stdnum) {
      return res.json({ deleted: false, error: "Student number is required." });
    }

    const result = await Student.deleteOne({ stdnum: stdnum }); // delete in database 

    if (result.deletedCount > 0) {
      res.json({ deleted: true });
    } else {
      res.json({ deleted: false, error: "Student not found." }); // error removing if student is not found
    }
  } catch (error) {
    res.json({ deleted: false, error: error.message });
  }
};

const removeAllUsers = async (req, res) => {
  try {
    const result = await Student.deleteMany({}); // Delete all students

    if (result.deletedCount > 0) {
      res.json({ deleted: true });
    } else {
      res.json({ deleted: false, error: "No students found." }); // error removing if no student is found
    }
  } catch (error) {
    res.json({ deleted: false, error: error.message });
  }
};

// ----------  Get User ---------------- //
// Get a user by student number
const getUser = async (req, res) => {
  try {
    const { stdnum } = req.query; // Get stdnum from query

    const student = await Student.find({ stdnum: stdnum }); // find in database

    if (student.length > 0) {
      res.send(student);
    } else {
      res.send([]); // Return empty array if student not found
    }
  } catch (error) {
    console.log({ error: error.message });
  }
};

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const students = await Student.find({});
    res.send(students.length > 0 ? students : []); // Return all students or empty array
  } catch (error) {
    console.log({ error: error.message });
  }
};

  
export { saveStudent, saveManyStudents, updateStudent, removeUser, removeAllUsers, getUser, getAllUsers};