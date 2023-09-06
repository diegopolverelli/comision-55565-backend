import { Router } from "express";
export const router=Router()

// import { io } from "../app.js";

let heroes=[]

router.post('/',(req,res)=>{

    // io.emit('altaHeroe', {mensaje:'hola desde router', heroe:req.body, heroes})

    req.io.emit('altaHeroe', {mensaje:'hola desde router', heroe:req.body, heroes})

    heroes.push(req.body)

    res.setHeader('Content-Type','application/json');
    res.status(200).json({
        heroeCreado:req.body
    });
});