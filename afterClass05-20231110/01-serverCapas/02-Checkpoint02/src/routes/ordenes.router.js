import { Router } from 'express';
import { createOrden, finalizaOrden, getOrdenes, getOrdenesById } from '../controllers/ordenes.controllers.js';
export const router=Router()

router.get('/', getOrdenes)
router.get('/:id', getOrdenesById)
router.post('/', createOrden)
router.put('/finalizar/:id',finalizaOrden)