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

    res.status(200).render('home')
})

router.get('/registro',auth2,(req,res)=>{

    res.status(200).render('registro')
})

router.get('/login',auth2,(req,res)=>{

    res.status(200).render('login')
})

router.get('/perfil',auth,(req,res)=>{

    res.status(200).render('perfil')
})