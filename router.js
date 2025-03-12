/*
CMSC 100 - C1L
Author: Luthelle L. Fernandez
Student Number: 2023 - 12438
Date: March 12, 2025

EXERCISE 6
*/
import { saveStudent, saveManyStudents , updateStudent, removeUser, removeAllUsers, getUser, getAllUsers } from './controller.js';

const router = (app) => {

  // Save
  app.post('/save-student', saveStudent);
  app.post('/save-multiple-students', saveManyStudents);
  
  // Update
  app.post('/update', updateStudent);

  // Remove Users
  app.post('/remove-user', removeUser);         
  app.post('/remove-all-user', removeAllUsers);

  // Get Users
  app.get('/user', getUser);       
  app.get('/members', getAllUsers); 
};

// export statement
export default router;
