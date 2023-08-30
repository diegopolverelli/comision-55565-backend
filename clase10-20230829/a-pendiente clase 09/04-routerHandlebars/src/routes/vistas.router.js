import { Router } from "express";
export const router=Router()
import { heroes } from "../data/heroes.js";

router.get('/',(req,res)=>{
    
    res.setHeader('Content-Type','text/html');
    res.status(200).render('home');
});

router.get('/heroes',(req,res)=>{

    let numero=Math.floor(Math.random()*(20))
    // console.log(numero)

    // console.log(heroes[numero].publisher==='Marvel'?'si':'no')
    // console.log(heroes[numero].publisher==='Marvel'?[1,2,3]:'no')


    res.setHeader('Content-Type','text/html');
    res.status(200).render('heroes',{
        heroe:heroes[numero].name,
        identidad:heroes[numero].alias,
        equipo:heroes[numero].team,
        empresa:heroes[numero].publisher,
        poderes:heroes[numero].powers,
        enemigos:heroes[numero].enemies,
        esMarvel:heroes[numero].publisher==='Marvel'?true:false
    });
})
