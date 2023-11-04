import { MisRespuestas } from "../utils/customResponses.js";

export const getUsuarios=async(req, res)=>{

    MisRespuestas.respuestaExitosa(res, "getUsuarios")
}

export const getUsuariosById=async(req, res)=>{

    MisRespuestas.respuestaExitosa(res, "getUsuariosById")
}

export const createUsuario=async(req, res)=>{

    MisRespuestas.respuestaExitosaAlta(res, "createUsuario")
}

// export const updateUsuario=async(req, res)=>{

//     MisRespuestas.respuestaExitosaAlta(res, "updateUsuario")
// }