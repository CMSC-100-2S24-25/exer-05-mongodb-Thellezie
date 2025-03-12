/*
CMSC 100 - C1L
Author: Luthelle L. Fernandez
Student Number: 2023 - 12438
Date: March 12, 2025

EXERCISE 6
*/

import express from 'express';
import mongoose from 'mongoose';
import router from './router.js';

const app = express();
app.use(express.json());  

mongoose.connect("mongodb://127.0.0.1:27017/StudentDatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("MongoDB Connected");
  router(app);  
  app.listen(3000, () => console.log("Server running on port 3000"));
}).catch(err => console.error("MongoDB Connection Failed:", err));
