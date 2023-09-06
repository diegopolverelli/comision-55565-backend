import { Router } from "express";
export const router=Router()
import { numero } from "./app.js";

export const init=(numero, nombres)=>{
    console.log('es este...!!! ',numero)
    nombres.push('José Luis')
    console.log(nombres,'desde router')
}


router.get('/',(req,res)=>{
    res.send('ok II...!!! desde router '+numero.toString())

    // res.send('ok...!!! desde router')
})