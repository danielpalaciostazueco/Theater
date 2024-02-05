import { Router } from 'express';
import { getAsientosPorSlug, guardarAsientos } from '../controllers/asientos.controller.js';

const router = Router();

router.get('/:slug', getAsientosPorSlug);
router.post('/:slug', guardarAsientos);

export default router;
