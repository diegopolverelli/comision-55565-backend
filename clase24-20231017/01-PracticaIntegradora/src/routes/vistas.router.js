import { Router } from 'express';
export const router=Router()

router.get('/registro',(req,res)=>{

    let error=false
    if(req.query.error){
        error=req.query.error
    }
    

    res.status(200).render('registro',{
        error
    })
})

router.get('/login',(req,res)=>{

    let error=false
    if(req.query.error){
        error=req.query.error
    }
    
    let mensaje=false
    if(req.query.mensaje){
        mensaje=req.query.mensaje
    }
    
    res.status(200).render('login',{
        error, mensaje
    })
})

router.get('/perfil',(req,res)=>{

    

    res.status(200).render('perfil')
})