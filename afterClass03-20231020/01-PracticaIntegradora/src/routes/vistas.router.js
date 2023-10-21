import { Router } from 'express';
import passport from 'passport';
import { usuariosModelo } from '../models/usuarios.model.js';
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

router.get('/perfil', passport.authenticate('jwt',{session:false}), async(req,res)=>{

    let pagina=1
    if(req.query.page){
        pagina=req.query.page
    }

    // let usuarios=await usuariosModelo.find().lean()
    let usuarios=await usuariosModelo.paginate({},{lean:true, limit:5, page:pagina})
    console.log(usuarios)

    let {hasPrevPage, hasNextPage, nextPage, prevPage, totalPages, page}=usuarios

    res.status(200).render('perfil',{
        usuarios:usuarios.docs,
        hasPrevPage, hasNextPage, nextPage, prevPage, totalPages, page
    })
})