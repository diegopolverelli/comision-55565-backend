import { Router } from "express";
export const router=Router()
// import { io } from "../app.js";

// io.on('connection',console.log('hola'))

let heroes=[]

export const init=(io)=>{
    io.on('connection',socket=>{
        socket.on('nuevoHeroe', nombre=>{
            heroes.push({nombre})
            io.emit('altaHeroe', {mensaje:'hola desde router', heroe:{nombre}, heroes})
        })
    })
}
