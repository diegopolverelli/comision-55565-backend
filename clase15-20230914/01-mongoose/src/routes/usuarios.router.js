import { Router } from "express";
import { usuariosModelo } from "../models/usuarios.modelo.js";
import mongoose from "mongoose";
export const router=Router()

router.get('/',async(req,res)=>{

    // let usuarios=[{nombre:'Juan', email:'jlopez@gmail.com'}]
    let usuarios=await usuariosModelo.find()

    res.status(200).json({
        usuarios
    })
})

router.post('/',async(req,res)=>{

    let usuario=req.body

    if(!usuario.nombre || !usuario.email) return res.status(400).json({error:'Faltan datos'})

    // let usuarios=await usuariosModelo.find({email:usuario.email})
    // console.log('con find',usuarios)

    let existe=await usuariosModelo.findOne({email:usuario.email})
    console.log('con findOne',existe)
    if(existe) return res.status(400).json({error:`Usuario con email ${usuario.email} ya está dado de alta`})

    try {
        let usuarioInsertado=await usuariosModelo.create(usuario)
    
        res.status(201).json({usuarioInsertado})
        
    } catch (error) {
        res.status(500).json({error:'Error inesperado', detalle:error.message})
        
    }

})


router.put('/:id',async(req, res)=>{
    let id=req.params.id
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({error:'id invalido'})

    let modifica=req.body
    if(!modifica.nombre || !modifica.email) return res.status(400).json({error:'Faltan datos'})

    let validaEmail=await usuariosModelo.findOne({email:modifica.email, _id:{$ne:id}})
    if(validaEmail) return res.status(400).json({error:`Ya existe otro usuario con email ${modifica.email}`})

    let existe=await usuariosModelo.findById(id)
    console.log(existe)

    if(!existe) return res.status(404).json({error:`usuario con id ${id} inexistente`})

    let resultado=await usuariosModelo.updateOne({_id:id}, modifica)

    console.log(resultado)

    res.status(200).json({resultado})

})

router.delete('/:id',async(req, res)=>{
    let id=req.params.id
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({error:'id invalido'})

    let existe=await usuariosModelo.findById(id)
    // console.log(existe)

    if(!existe) return res.status(404).json({error:`usuario con id ${id} inexistente`})

    let resultado=await usuariosModelo.deleteOne({_id:id})

    // console.log(resultado)

    res.status(200).json({resultado})

})