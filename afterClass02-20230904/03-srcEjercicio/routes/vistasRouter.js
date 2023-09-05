import { Router } from "express";
export const router=Router()

router.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.status(200).render('home');
})


router.get('/contacto',(req,res)=>{

    // validacion return res.status(400).send('Faltan datos')


    res.setHeader('Content-Type','text/html');
    res.status(200).render('vistaContacto');
    // console.log('hola')
})


router.get('/info',(req,res)=>{

    res.setHeader('Content-Type','text/html');
    res.status(200).render('info');
})

router.get('/registro',(req,res)=>{

    res.setHeader('Content-Type','text/html');
    res.status(200).render('registro');
})
