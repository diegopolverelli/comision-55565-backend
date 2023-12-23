import { Router } from 'express';
import { UsuariosMySqlDao as dao } from '../dao/daoMySql.js';
export const router=Router()

router.get('/',async(req,res)=>{

    let usuarios=await dao.getUsuarios()

    res.setHeader('Content-Type','application/json')
    res.status(200).json({usuarios})
})

router.get('/:id',async(req,res)=>{
    let {id}=req.params
    id=Number(id)
    if(isNaN(id)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Ingrese un id numérico...!!!`})
    }


    let usuario=await dao.getUsuarioById(id)

    res.setHeader('Content-Type','application/json')
    res.status(200).json({usuario})
})

router.post('/',async (req,res)=>{

    let {nombre, email}=req.body
    if(!nombre || !email){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Faltan datos...!!!`})
    }

    let existe=await dao.getUsuarioByEmail(email)
    if(existe){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`El usuario con email ${email} ya existe en DB`})
    }

    let nuevoUsuario=await dao.createUsuario({nombre, email})

    res.setHeader('Content-Type','application/json');
    return res.status(201).json({nuevoUsuario});
})