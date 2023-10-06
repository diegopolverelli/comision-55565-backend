import { Router } from 'express';
import crypto from 'crypto'
import { modeloUsuarios } from '../models/usuarios.models.js';
export const router=Router()
import passport from 'passport';

router.get('/errorRegistro',(req,res)=>{
    
    res.setHeader('Content-Type','application/json');
    res.status(200).json({
        error:'Error de registro'
    });
});

router.post('/registro',passport.authenticate('registro',{failureRedirect:'/api/sessions/errorRegistro'}),async(req,res)=>{

    let {nombre, email, password}=req.body

    // if(!nombre || !email || !password){
    //     // return res.status(400).send('faltan datos')
    //     return res.redirect('/registro?error=Complete email, nombre, y contraseña')
    // }

    // let existe=await modeloUsuarios.findOne({email})
    // if(existe){
    //     // return res.status(400).send(`Usuario ya está registrado: ${email}`)
    //     return res.redirect('/registro?error='+`Usuario ya está registrado: ${email}`)

    // }

    // password=crypto.createHmac('sha256','palabraSecreta').update(password).digest('base64')

    // await modeloUsuarios.create({
    //     nombre, email, password
    // })

    console.log(req.user)

    res.redirect(`/login?usuarioCreado=${email}`)
})

router.get('/errorLogin',(req,res)=>{
    
    res.setHeader('Content-Type','application/json');
    res.status(200).json({
        error:'Error Login'
    });
});

router.post('/login', passport.authenticate('login',{failureRedirect:'/api/sessions/errorLogin'}),async(req,res)=>{

    // let {email, password}=req.body

    // if(!email || !password) {
    //     // return res.send('faltan datos')
    //     return res.redirect('/login?error=Faltan datos')
    // }

    // password=crypto.createHmac('sha256','palabraSecreta').update(password).digest('base64')

    // let usuario=await modeloUsuarios.findOne({email, password})
    // if(!usuario){
    //     // return res.status(401).send('credenciales incorrectas')
    //     return res.redirect('/login?error=credenciales incorrectas')
    // }

    console.log(req.user)

    // req.session.usuario={
    //     nombre: usuario.nombre,
    //     email: usuario.email
    // }

    req.session.usuario=req.user


    res.redirect('/perfil')

    
});


router.get('/logout',(req,res)=>{

    req.session.destroy(e=>console.log(e))

    res.redirect('/login?mensaje=logout correcto...!!!')

});