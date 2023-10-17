import { Router } from "express";

export class MiRouter{
    constructor(){
        this.router=Router()
        this.init()
    }

    init(){}

    getRouter(){
        return this.router
    }
    
    get(ruta, permisos, ...funciones){ 
        // ... operador rest -> 
        // cuando se lo llama a get desde el router o una clase que hereda el router 
        // por ej: get(1,2,3,4,5)
        // 1 -> ruta
        // 2,3,4,5 -> a permisos
    
        console.log({ruta, funciones})
        this.router.get(ruta, this.misRespuestas, this.acceso(permisos) , funciones)
    }

    post(ruta, permisos, ...funciones){ // operador rest
        console.log({ruta, funciones})
        this.router.post(ruta, this.misRespuestas, this.acceso(permisos), funciones)
    }

    put(ruta, permisos, ...funciones){ // operador rest
        console.log({ruta, funciones})
        this.router.put(ruta, this.misRespuestas, this.acceso(permisos), funciones)
    }

    delete(ruta, permisos, ...funciones){ // operador rest
        console.log({ruta, funciones})
        this.router.delete(ruta, this.misRespuestas, this.acceso(permisos), funciones)
    }

    misRespuestas=(req, res, next)=>{
        res.success=(respuesta)=>res.status(200).json({status:'success', respuesta})
        res.errorCliente=(error)=>res.status(400).json({status:'error', error})
        res.errorAutenticacion=(error)=>res.status(401).json({status:'error Autenticacion', error})
        res.errorAutorizacion=(error)=>res.status(403).json({status:'error Autorizacion', error})

        next()
    }

    acceso(permisos=['PUBLIC']){
        // Permite poder trabajar varios permisos
        // Es decir, a que endpoints van a poder acceder Administradores, usuarios
        // o cualquiera
        return (req, res, next)=>{
            if(permisos.includes('PUBLIC')) return next()

            // acceder al req.authorization
            // decodificar token, obtener usuario (incluyendo rol)
            // if(permisos.includes(usuario.rol.toUpperCase())) return next()
            // si no está incluido el rol entre los permisos, que responda con error Autorizacion

            res.errorAutenticacion('Realizar login...!!!')
        }
    }

}