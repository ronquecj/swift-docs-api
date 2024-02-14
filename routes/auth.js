import express from 'express';
import {
  loginUser,
  registerUser,
  loginAdmin,
  registerAdmin,
} from '../controllers/auth.js';

const router = express.Router();

// USER
router.post('/user/login', loginUser);
router.post('/user/register', registerUser);

// ADMIN
router.post('/admin/login', loginAdmin);
router.post('/admin/register', registerAdmin);

export default router;
