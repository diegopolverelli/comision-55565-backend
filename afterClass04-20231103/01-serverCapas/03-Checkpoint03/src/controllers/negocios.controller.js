import { NegociosMongoDao } from "../dao/negociosMongoDAO.js"
import { MisRespuestas } from "../utils/customResponses.js"

const negociosService=new NegociosMongoDao()

export const getNegocios=async(req, res)=>{

    let negocios
    try {
        negocios=await negociosService.get()
    } catch (error) {
        return MisRespuestas.respuestaErrorServer(res, `Error inesperado: ${error.message}`)
    }

    MisRespuestas.respuestaExitosa(res, negocios)
}

export const getNegociosById=async (req, res)=>{

    console.log(req.params)

    let negocio
    try {
        negocio=await negociosService.getById(req.params.id)
    } catch (error) {
        return MisRespuestas.respuestaErrorServer(res, `Error inesperado: ${error.message}`)
    }

    MisRespuestas.respuestaExitosa(res, negocio)
}

export const createNegocio=async(req, res)=>{

    let {nombre}=req.body
    if(!nombre) return MisRespuestas.respuestaErrorCliente(res, 'Complete nombre negocio')

    let negocios
    try {
        negocios=await negociosService.get()
    } catch (error) {
        return MisRespuestas.respuestaErrorServer(res, `Error inesperado: ${error.message}`)
    }
    let existe=negocios.find(n=>n.nombre===nombre)
    if(existe) return MisRespuestas.respuestaErrorCliente(res, `El negocio ${nombre} existe en DB`)

    let nuevoNegocio
    try {
        nuevoNegocio=await negociosService.create({nombre})
    } catch (error) {
        return MisRespuestas.respuestaErrorServer(res, `Error inesperado: ${error.message}`)
    }

    MisRespuestas.respuestaExitosaAlta(res, nuevoNegocio)
}

export const addProducto=async(req,res)=>{
    let id=req.params.id

    let {codigo, nombre, precio}=req.body
    if(!codigo || !nombre || !precio) return MisRespuestas.respuestaErrorCliente(res, "Complete los datos")

    let negocio
    try {
        negocio=await negociosService.getById(id)
    } catch (error) {
        return MisRespuestas.respuestaErrorServer(res, `Error inesperado: ${error.message}`)
    }
    if(!negocio ) return MisRespuestas.respuestaErrorCliente(res, "Negocio inexistente")

    let existe=negocio.productos.find(p=>p.codigo===codigo)
    if(existe) return MisRespuestas.respuestaErrorCliente(res, "Codigo producto existe")

    existe=negocio.productos.find(p=>p.nombre===nombre)
    if(existe) return MisRespuestas.respuestaErrorCliente(res, "Nombre producto existe")

    negocio.productos.push({codigo, nombre, precio})
    let negocioActualizado
    try {
        await negociosService.update(id, negocio)
        negocioActualizado=await negociosService.getById(id)
    } catch (error) {
        return MisRespuestas.respuestaErrorServer(res, `Error inesperado: ${error.message}`)
    }

    MisRespuestas.respuestaExitosaAlta(res, negocioActualizado)
}



