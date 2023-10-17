import { Router } from "express";

export const router=Router();

router.get('/',(req,res)=>{
    
    res.setHeader('Content-Type','application/json');
    res.status(200).json({
        mensaje:'Bienvenido al Router de Pruebas'
    });
});

router.get('/:numero([0-9-.]+)',(req,res)=>{
    // el simbolo + indica que puede haber varias ocurrencias/repeticiones de [0-9-.] 
    
    res.setHeader('Content-Type','application/json');
    res.status(200).json({
        mensaje:'Router de Pruebas', 
        numero: req.params.numero
    });
});

router.get('/:palabra([a-zA-z]+)',(req,res)=>{
    
    res.setHeader('Content-Type','application/json');
    res.status(200).json({
        mensaje:'Router de Pruebas', 
        palabra: req.params.palabra
    });
});

let errores={
    a: "Error Hardware",
    b: "Error Software", 
    c: "Error Inteface"
}

router.param('codigo',(req, res, next, codigo)=>{
    // para evitar la seccion de errores comentados en los endpoints de abajo 
    let detalleError='Error desconocido'
    if(errores[codigo]){
        detalleError=errores[codigo]
    }
    req.detalleError=detalleError
    return next()
})

router.get('/error/:codigo',(req,res)=>{
    // let detalleError='Error desconocido'
    // if(errores[req.params.codigo]){
    //     detalleError=errores[req.params.codigo]
    // }
    
    res.setHeader('Content-Type','application/json');
    res.status(200).json({
        mensaje:'Router de Pruebas', 
        error: req.detalleError
    });
});

router.get('/error/:usuario/:codigo',(req,res)=>{
    // let detalleError='Error desconocido'
    // if(errores[req.params.codigo]){
    //     detalleError=errores[req.params.codigo]
    // }
    
    res.setHeader('Content-Type','application/json');
    res.status(200).json({
        mensaje:'Router de Pruebas', 
        error: req.detalleError,
        reportadoPor:req.params.usuario
    });
});


router.get('*',(req, res)=>{
    // cualquier otro endpoint que no haya sido declarado
    res.status(404).send('Page not found')
})