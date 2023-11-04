import { MisRespuestas } from "../utils/customResponses.js";


export const getOrdenes=async(req, res)=>{

    MisRespuestas.respuestaExitosa(res, "getOrdenes")
}

export const getOrdenesById=async(req, res)=>{

    MisRespuestas.respuestaExitosa(res, "getOrdenesById")
}

export const createOrden=async(req, res)=>{

    MisRespuestas.respuestaExitosaAlta(res, "createOrden")
}

export const finalizaOrden=async(req, res)=>{

    MisRespuestas.respuestaExitosa(res, "finalizaOrden")
}