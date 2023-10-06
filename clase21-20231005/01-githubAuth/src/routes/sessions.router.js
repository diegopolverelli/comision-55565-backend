import { Router } from 'express';
import passport from 'passport';
export const router=Router()


router.get('/github', passport.authenticate('github',{}),(req,res)=>{})

router.get('/callbackGithub',passport.authenticate('github',{failureRedirect:'/api/sessions/errorGithub'}),(req,res)=>{
    
    res.setHeader('Content-Type','application/json');
    res.status(200).json({
        mensaje:'Login OK',
        usuario: req.user
    });
});

router.get('/errorGithub',(req,res)=>{
    
    res.setHeader('Content-Type','application/json');
    res.status(200).json({
        error:'Error en Github'
    });
});