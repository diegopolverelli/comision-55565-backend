import { Router } from "express";
import jwt from 'jsonwebtoken'

export class MiRouter{
    constructor(){
        this.router=Router()
        this.init()
    }

    init(){}

    getRouter(){
        return this.router
    }
    
    get(ruta, permisos, ...funciones){ // operador rest
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
        return (req, res, next)=>{
            if(permisos.includes('PUBLIC')) return next()

            // acceder al req.headers.authorization o a las cookies
            // decodificar token, obtener usuario (incluyendo rol)
            // if(permisos.includes(usuario.rol.toUpperCase())) return next()
            // si no está incluido el rol entre los permisos, que responda con error Autorizacion
            if(!req.cookies.coderCookie) return res.errorAutenticacion('No existe Token')
            let token=req.cookies.coderCookie
            jwt.verify(token, "coder123", (err, credencial)=>{
                if(err){
                    return res.errorAutenticacion('Token invalido')
                }else{
                    if(permisos.includes(credencial.usuario.rol.toUpperCase())) return next()
                    else return res.errorAutorizacion('No tiene privilegios suficientes para acceder al recurso')
                }
            })

            // res.errorAutenticacion('Realizar login...!!!')
        }
    }

}