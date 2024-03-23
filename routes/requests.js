import express from 'express';
import {
  newRequest,
  getRequest,
  getRequestById,
  approveRequest,
} from '../controllers/request.js';

const router = express.Router();

// REQUEST
router.post('/new', newRequest);
router.post('/approve/:id', approveRequest);
router.get('/', getRequest);
router.get('/:id', getRequestById);
export default router;
