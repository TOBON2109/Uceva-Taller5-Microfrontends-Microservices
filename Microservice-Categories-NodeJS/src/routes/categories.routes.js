import { Router } from 'express';
import { getCategories } from '../controllers/categories.controller.js';

const router = Router();

router.get('/:count', getCategories);

export default router;
