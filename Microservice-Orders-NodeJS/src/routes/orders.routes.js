import { Router } from 'express';
import { getOrders } from '../controllers/orders.controller.js';

const router = Router();

router.get('/:count', getOrders);

export default router;
