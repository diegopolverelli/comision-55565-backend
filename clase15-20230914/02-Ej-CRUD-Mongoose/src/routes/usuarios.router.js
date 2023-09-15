import { Router } from "express";
import { usuariosModelo } from "../models/usuarios.modelo.js";
export const router=Router()

router.get('/',async(req,res)=>{

    // let usuarios=[{nombre:'Juan', email:'jlopez@gmail.com'}]
    // let usuarios=await usuariosModelo.find().lean()
    let usuarios=await usuariosModelo.find()


    console.log('de Atlas:',usuarios[0])
    console.log('keys de Atlas:', Object.keys(usuarios[0]))
    console.log('keys de Atlas (con toJSON):', Object.keys(usuarios[0].toJSON()))
    console.log('keys de Atlas (con toObject):', Object.keys(usuarios[0].toObject()))

    let usuarioPrueba={
        _id: "6503b022775e2d28e4e6ecbb",
        nombre: 'Diego',
        __v: 0
      }

    console.log('usuario prueba:',usuarioPrueba)
    console.log('keys usuario prueba:', Object.keys(usuarioPrueba))


    res.status(200).json({
        usuarios
    })
})

router.post('/',async(req,res)=>{
    // let {nombre, apellido, email, dni}=req.body

    // FALTAN LAS VALIDACIONES...!!!

    try {
        // let usuarioNuevo=await usuariosModelo.create({
        //     nombre, 
        //     apellido,
        //     email, 
        //     dni
        // })
    
        let usuarioNuevo=await usuariosModelo.create(req.body)

        res.status(201).json({usuarioNuevo})    
            
    } catch (error) {
        res.status(500).json({error:'error inesperado', detalle:error.message})
    }
})