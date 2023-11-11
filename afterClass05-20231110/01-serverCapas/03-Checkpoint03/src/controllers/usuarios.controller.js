import { UsuariosMongoDao } from "../dao/usuariosMongoDAO.js";
import { MisRespuestas } from "../utils/customResponses.js";

const usuariosService=new UsuariosMongoDao()

export const getUsuarios=async(req, res)=>{

    let usuarios
    try {
        usuarios=await usuariosService.get()
    } catch (error) {
        return MisRespuestas.respuestaErrorServer(res, `Error inesperado: ${error.message}`)
    }

    MisRespuestas.respuestaExitosa(res, usuarios)
}

export const getUsuariosById=async(req, res)=>{

    let usuario
    try {
        usuario=await usuariosService.getById(req.params.id)
    } catch (error) {
        return MisRespuestas.respuestaErrorServer(res, `Error inesperado: ${error.message}`)
    }

    MisRespuestas.respuestaExitosa(res, usuario)
}

export const createUsuario=async(req, res)=>{

    let {nombre, correo}=req.body
    if(!nombre || !correo) return MisRespuestas.respuestaErrorCliente(res, "Faltan datos")

    // let usuarios
    // try {
    //     usuarios=await usuariosService.get()    
    // } catch (error) {
    //     return MisRespuestas.respuestaErrorServer(res, `Error inesperado: ${error.message}`)
    // }

    // let existe=usuarios.find(u=>u.correo===correo)
    // if(existe) return MisRespuestas.respuestaErrorCliente(res, "Usuario repetido")

    let existe
    try {
        existe=await usuariosService.getBy({correo})
    } catch (error) {
        return MisRespuestas.respuestaErrorServer(res, `Error inesperado: ${error.message}`)
    }

    console.log(existe)
    if(existe) return MisRespuestas.respuestaErrorCliente(res, "Usuario repetido")


    let nuevoUsuario
    try {
        nuevoUsuario=await usuariosService.create({nombre, correo, rol:"USUARIO"})
    } catch (error) {
        return MisRespuestas.respuestaErrorServer(res, `Error inesperado: ${error.message}`)
    }

    MisRespuestas.respuestaExitosaAlta(res, nuevoUsuario)
}

// export const updateUsuario=async(req, res)=>{

//     MisRespuestas.respuestaExitosaAlta(res, "updateUsuario")
// }