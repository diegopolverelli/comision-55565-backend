import { Router } from 'express';
export const router=Router()

router.get('/login',(req,res)=>{

    res.status(200).render('login')
})