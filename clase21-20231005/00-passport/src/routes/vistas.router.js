import { Router } from 'express';
export const router=Router()

const auth=(req, res, next)=>{
    if(req.session.usuario){
        next()
    }else{
        return res.redirect('/login')
    }
}

const auth2=(req, res, next)=>{
    if(req.session.usuario){
        console.log('auth2 me manda a perfil')

        return res.redirect('/perfil')
    }else{
        next()
    }
}

router.get('/',(req,res)=>{

    let verLogin=true
    if(req.session.usuario){
        verLogin=false
    }


    res.status(200).render('home',{
        verLogin
    })
})

router.get('/registro',auth2,(req,res)=>{

    let error=false
    let errorDetalle=''
    if(req.query.error){
        error=true
        errorDetalle=req.query.error
    }

    res.status(200).render('registro',{
        verLogin:true,
        error, errorDetalle
    })
})

router.get('/login',auth2,(req,res)=>{

    let error=false
    let errorDetalle=''
    if(req.query.error){
        error=true
        errorDetalle=req.query.error
    }

    let usuarioCreado=false
    let usuarioCreadoDetalle=''
    if(req.query.usuarioCreado){
        usuarioCreado=true
        usuarioCreadoDetalle=req.query.usuarioCreado
    }



    res.status(200).render('login',{
        verLogin:true,
        usuarioCreado, usuarioCreadoDetalle,
        error, errorDetalle
    })
})

router.get('/perfil',auth,(req,res)=>{



    res.status(200).render('perfil',{
        verLogin:false,
        usuario: req.session.usuario
    })
})