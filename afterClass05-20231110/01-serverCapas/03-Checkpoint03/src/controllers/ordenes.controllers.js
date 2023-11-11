import { NegociosMongoDao } from "../dao/negociosMongoDAO.js";
import { OrdenesMongoDao } from "../dao/ordenesMongoDAO.js";
import { UsuariosMongoDao } from "../dao/usuariosMongoDAO.js";
import { MisRespuestas } from "../utils/customResponses.js";

const negociosService=new NegociosMongoDao()
const ordenesService=new OrdenesMongoDao()
const usuariosService=new UsuariosMongoDao()


export const getOrdenes=async(req, res)=>{

    let ordenes
    try {
        ordenes=await ordenesService.get()
    } catch (error) {
        return MisRespuestas.respuestaErrorServer(res, `Error inesperado. Detalle: ${error.message}`)
    }

    MisRespuestas.respuestaExitosa(res, ordenes)
}

export const getOrdenesById=async(req, res)=>{

    let orden
    try {
        orden=await ordenesService.getById(req.params.id)
        if(!orden){
            return MisRespuestas.respuestaErrorCliente(res, `No existe la orden`)
        }
    } catch (error) {
        return MisRespuestas.respuestaErrorServer(res, `Error inesperado. Detalle: ${error.message}`)
    }


    MisRespuestas.respuestaExitosa(res, orden)
}

export const createOrden=async(req, res)=>{
    let {usuario, negocio, items}=req.body
    if(!usuario || !negocio || !items) return MisRespuestas.respuestaErrorCliente(res, `Faltan datos`)

    let datosUsuario, datosNegocio
    try {
        datosNegocio=await negociosService.getById(negocio)
        if(!datosNegocio) return MisRespuestas.respuestaErrorCliente(res, `No existe el negocio con id ${negocio}`)
        datosUsuario=await usuariosService.getById(usuario)
        if(!datosUsuario) return MisRespuestas.respuestaErrorCliente(res, `No existe el usuario con id ${usuario}`)
    } catch (error) {
        return MisRespuestas.respuestaErrorServer(res, `Error inesperado. Detalle: ${error.message}`)
    }

    // items [{codigo:1, cantidad:5},{codigo:2, cantidad:2}]
    let error=false
    items=items.map(item=>{
        let producto=datosNegocio.productos.find(producto=>producto.codigo===item.codigo)
        if(!producto){
            error=true
            return item
        }else{
            let subtotal=item.cantidad*producto.precio
            return {...item, ...producto, subtotal}
        }
    })

    // console.log(items)
    let total=items.reduce((acum, item)=>acum+item.subtotal, 0)
    // console.log(total)
    let estado=false
    let numeroOrden=Date.now()

    let orden
    try {
        orden=await ordenesService.create({numeroOrden, estado, total, items, usuario, negocio})
        datosUsuario.pedidos.push(orden._id)
        await usuariosService.update(usuario, datosUsuario)
    } catch (error) {
        return MisRespuestas.respuestaErrorServer(res, `Error inesperado. Detalle: ${error.message}`)
    }

    MisRespuestas.respuestaExitosaAlta(res, orden)
}

export const finalizaOrden=async(req, res)=>{

    MisRespuestas.respuestaExitosa(res, "finalizaOrden")
}