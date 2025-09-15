import express from 'express';
import { addStudent, deleteStudent, fetchStudent, updateStudent } from '../controllers/studentController.js';
import upload from '../middleware/multer.js';
const studentRoutes = express.Router();

studentRoutes.post('/add',upload.single('image'),addStudent);
studentRoutes.get('/fetch',fetchStudent);
studentRoutes.delete('/delete/:id',deleteStudent);
studentRoutes.put('/update/:id',upload.single('image'),updateStudent);

export default studentRoutes