import express from 'express';
import {
  newRequest,
  getRequest,
  getRequestById,
} from '../controllers/request.js';

const router = express.Router();

// REQUEST
router.post('/new', newRequest);
router.get('/', getRequest);
router.get('/:id', getRequestById);
export default router;
