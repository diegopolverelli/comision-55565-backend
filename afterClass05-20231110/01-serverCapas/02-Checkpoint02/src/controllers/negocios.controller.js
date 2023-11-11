import { MisRespuestas } from "../utils/customResponses.js"

export const getNegocios=async(req, res)=>{

    MisRespuestas.respuestaExitosa(res, "getNegocios")
}

export const getNegociosById=async (req, res)=>{

    MisRespuestas.respuestaExitosa(res, "getNegociosById")
}

export const createNegocio=async(req, res)=>{

    MisRespuestas.respuestaExitosaAlta(res, "createNegocio")
}

export const addProducto=async(req,res)=>{

    MisRespuestas.respuestaExitosaAlta(res, "addProducto")
}



