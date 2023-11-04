const HTTP_STATUS={
    STATUS_200:{code:200, message:"Operación realizada con éxito"},
    STATUS_201:{code:201, message:"Alta realizada con éxito"},
    STATUS_400:{code:400, message:"Error en el FrontEnd"},
    STATUS_500:{code:500, message:"Error interno del servidor - contacte a su administrador"},
}

export class MisRespuestas{
    static respuestaExitosa(res, dato){
        res.setHeader('Content-Type',"application/json")
        res.status(HTTP_STATUS.STATUS_200.code).json({mensaje:HTTP_STATUS.STATUS_200.message, dato})
    }

    static respuestaExitosaAlta(res, dato){
        res.setHeader('Content-Type',"application/json")
        res.status(HTTP_STATUS.STATUS_201.code).json({mensaje:HTTP_STATUS.STATUS_201.message, dato})
    }

    static respuestaErrorCliente(res, error){
        res.setHeader('Content-Type',"application/json")
        res.status(HTTP_STATUS.STATUS_400.code).json({mensaje:HTTP_STATUS.STATUS_400.message, error})
    }

    static respuestaErrorServer(res, error){
        res.setHeader('Content-Type',"application/json")
        res.status(HTTP_STATUS.STATUS_500.code).json({mensaje:HTTP_STATUS.STATUS_500.message, error})
    }

}