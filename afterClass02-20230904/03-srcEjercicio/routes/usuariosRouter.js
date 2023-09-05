import { Router } from "express";
export const router=Router()

import { v4 as uuidv4 } from 'uuid';


let usuarios=[]

router.get('/',(req,res)=>{
    res.json(usuarios)
})

router.post('/',(req,res)=>{

    let usuario=req.body

    if(!usuario.nombre || !usuario.email) return res.status(400).send('Ingrese email y nombre')

    usuario.id=uuidv4()
    
    usuarios.push(usuario)

    res.json({usuarioCreado:usuario})
})