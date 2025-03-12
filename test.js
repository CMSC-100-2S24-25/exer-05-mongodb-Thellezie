/*
CMSC 100 - C1L
Author: Luthelle L. Fernandez
Student Number: 2023 - 12438
Date: March 12, 2025

EXERCISE 6

References : 
- https://stackoverflow.com/questions/25271962/sending-json-object-by-needle   -> {json: true}
- https://www.demo2s.com/g/javascript/how-to-use-node-js-readline-rl-question-query-callback.html -> For switch function
*/

// Import Statements
import needle from 'needle';
import readline from 'readline';
import {studentsData, updateData_MaryJane, removeStudent, removeStudent_existing} from './data.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// MENU
console.log(`
  ============= MENU =============
  1 - Add Students
  2 - Update Mary Jane's Last Name
  3 - Remove Specific Student
  4 - Remove All Student Data
  5 - Get Specific User
  6 - Get All Users
  0 - Exit
  ================================
`);

// Switch Function
const handleAction = (choice) => {
  switch (choice.trim()) {
    case "1": // Add Students
      console.log("\nAdding Student Data ..");

      needle.post('http://localhost:3000/save-multiple-students', studentsData, { json: true }, (err, res) => {
        if (err) console.error(err);
        console.log("Response:", res.body);
      });

      break;

    case "2": // Update Surname (For Mary Jane)
      console.log("Updating Data ..\n");

      needle.post('http://localhost:3000/update', updateData_MaryJane, { json: true }, (err, res) => {
        if (err) console.error(err);
        console.log("Response:", res.body);
      });

      break;

    case "3": // Remove Specific User
      console.log("Deleting One User .. \n");
      
      //  !! Uncomment to test -> Non-existing student to remove
      // needle.post('http://localhost:3000/remove-user', removeStudent, { json: true }, (err, res) => {
      //   console.log("Remove User Response:", res.body);
      // });

      // !! Uncomment to test -> Existing student to remove
      needle.post('http://localhost:3000/remove-user', removeStudent_existing, { json: true }, (err, res) => {
        console.log("Remove User Response:", res.body);
      });

      break;

    case "4": // Delete ALL users in database
      console.log("Deleting ALL Users .. \n");

      needle.post('http://localhost:3000/remove-all-user', {}, { json: true }, (err, res) => {
        console.log("Remove All Users Response:", res.body);
      });

      break;

    case "5": // Get Users
      console.log("Getting User .. \n");

      // !! Uncomment to test -> Existing user to get - Mary Jane
      // needle.get('http://localhost:3000/user?stdnum=202310001', (err, res) => {
      //   if (err) console.error("Error:", err);
      //   console.log("Get a User:", res.body);
      // });
      
      // !! Uncomment to test -> Not Existing user to get
      needle.get('http://localhost:3000/user?stdnum=8051495845', (err, res) => {
        if (err) console.error("Error fetching user:", err);
        console.log("Get User Response:", res.body);
      });

      break;
      

    case "6": 
      console.log("Getting ALL Users .. \n");

      needle.get('http://localhost:3000/members', (err, res) => {
        if (err) console.error("Error:", err);
        console.log("Get All Users:", res.body);
      });

      break;

    case "0": // Exit 
      console.log("GOODBYE!");
      break;

    default:
      console.log("Error: Invalid Choice, Enter a valid Option");
  }
};

rl.question(" Choice: ", (input) => {
  handleAction(input);
  rl.close(); // Close after one input
});