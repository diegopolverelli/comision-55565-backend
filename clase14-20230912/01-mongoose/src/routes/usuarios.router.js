import { Router } from "express";
export const router=Router()

router.get('/',(req,res)=>{

    let usuarios=[{nombre:'Juan', email:'jlopez@gmail.com'}]

    res.status(200).json({
        usuarios
    })
})