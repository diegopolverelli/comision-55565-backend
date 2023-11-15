export const errorHandler=(error, req, res, next)=>{
    if(error){
        if(error.codigo){
            console.log(`${error.name}: ${error.descripcion}
            
            ${error.stack}
            
            FIN ERROR...*********`)
            res.setHeader('Content-Type','application/json');
            return res.status(error.codigo).json({error:error.message})
        }else{
            res.setHeader('Content-Type','application/json');
            return res.status(500).json({error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`})
        }
    }

    next()
}