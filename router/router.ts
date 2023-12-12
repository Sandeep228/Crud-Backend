import express from 'express';
import {
  getItems,
  deleteItem,
  updateItem,
  createItem,
  sendMail
} from '../controller/controller';

const router = express.Router();

router.get('/items', getItems);
router.delete('/items/:id', deleteItem);
router.put('/items/:id', updateItem);
router.post('/items', createItem);
router.post('/mail', sendMail);

export default router;

