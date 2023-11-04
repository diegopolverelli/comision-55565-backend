import { Router } from 'express';
import { createUsuario, getUsuarios, getUsuariosById, updateUsuario } from '../controllers/usuarios.controller.js';
export const router=Router()

router.get('/',getUsuarios)
router.get('/:id',getUsuariosById)
router.post('/',createUsuario)
router.put('/:id',updateUsuario)