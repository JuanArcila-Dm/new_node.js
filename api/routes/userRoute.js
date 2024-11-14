import express from 'express';
const router = express.Router();

import { getAllUsers,getUserId,newUser } from '../controller/userController.js';

router.get('/', getAllUsers); 
router.get('/user/:id', getUserId);
router.post('/new-user',newUser);



export default router;
