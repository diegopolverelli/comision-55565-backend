import { Router } from 'express';
import HeroesManager from '../manager/HeroesManager.js'
export const router=Router()

const heroesManager=new HeroesManager()

router.get('/',(req,res)=>{
    req.logger.error("Prueba log - nivel error")
    req.logger.log("error", "Prueba log - nivel error")
    req.logger.warn("Prueba log - nivel warn")
    req.logger.info("Prueba log - nivel info")
    req.logger.http("Prueba log - nivel http")
    req.logger.verbose("Prueba log - nivel verbose")
    req.logger.debug("Prueba log - nivel debug")
    req.logger.silly("Prueba log - nivel silly")

    res.status(200).render('home')
})

router.get('/heroes',(req,res)=>{

    let heroes=heroesManager.getHeroes()

    res.status(200).render('heroes', {
        heroes
    })
})