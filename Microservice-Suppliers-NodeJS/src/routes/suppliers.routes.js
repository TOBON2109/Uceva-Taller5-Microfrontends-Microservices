import { Router } from 'express';
import { getSuppliers } from '../controllers/suppliers.controller.js';

const router = Router();

router.get('/:count', getSuppliers);

export default router;
