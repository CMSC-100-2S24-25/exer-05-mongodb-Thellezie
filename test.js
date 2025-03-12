import needle from 'needle';
import {studentsData, updateData_MaryJane, removeStudent, removeStudent_existing} from './data.js';

// Add Data
  needle.post('http://localhost:3000/save-multiple-students', studentsData, { json: true }, (err, res) => {
    if (err) console.error(err);
    console.log("Response:", res.body);
  });

// Update
//   needle.post('http://localhost:3000/update', updateData_MaryJane, { json: true }, (err, res) => {
//     if (err) console.error(err);
//     console.log("Response:", res.body);
//   });

// // Remove User

// // Student to be deleted
// // Deleting Single (Specific User)
// needle.post('http://localhost:3000/remove-user', removeStudent, { json: true }, (err, res) => {
//   console.log("Remove User Response:", res.body);
// });

// needle.post('http://localhost:3000/remove-user', removeStudent_existing, { json: true }, (err, res) => {
//   console.log("Remove User Response:", res.body);
// });

// // Deleting ALL users in database
// needle.post('http://localhost:3000/remove-all-user', {}, { json: true }, (err, res) => {
//   console.log("Remove All Users Response:", res.body);
// });

// // Get Users
// needle.get('http://localhost:3000/user?stdnum=8051495845', (err, res) => {
//   console.log("Get User Response:", res.body);
// });

// // Test getAllUsers route
// needle.get('http://localhost:3000/members', (err, res) => {
//   console.log("Get All Users Response:", res.body);
// });

//////////////////////////////////////////////////////////////////////////////////

// const Student = mongoose.model('StudentDatabase', {
//     stdnum: String,
//     fname: String,
//     lname: String,
//     age: Number
// }, 'studentData')



// Find
// let data = await Student.find({ age: 17});
// console.log(data);

// SAVE
// const newStudent = new Student({
//     stdnum: "23456789",
//     fname: "Luthelle",
//     lname: "dela Cruz",
//     age: 20
// });

// await newStudent.save();

//UPDATE
// simple update
// let stud = await Student.findOne({ fname: "Juan"});
// stud.age = 75
// await stud.save();

//DELETE
//await Student.deleteOne({ stdnum: '23456789'}) // Delete one
// await Student.deleteMany({ fname: "Juan" }); // Delete Many
