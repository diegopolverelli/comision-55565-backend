import { Router } from 'express';
import { addProducto, createNegocio, getNegocios, getNegociosById } from '../controllers/negocios.controller.js';
export const router=Router()

router.get('/', getNegocios)
router.get('/:id', getNegociosById)
router.post('/', createNegocio)
router.post('/:id/producto', addProducto)