import { Router } from 'express';
import ContactosMemoryDAO from '../dao/contactosMemoryDAO.js';
export const router=Router()

const dao=new ContactosMemoryDAO()

router.get('/',async(req,res)=>{

    let contactos=await dao.get() 

    res.status(200).json({contactos})
})

router.post('/',async(req,res)=>{

    let {first_name, last_name, email, phone_number}=req.body
    if(!first_name || !last_name || !email) return res.status(400).json({error:'First_name, last_name, email are required'})

    let regNum=/[0-9]/
    if(regNum.test(first_name) || regNum.test(last_name)) return res.status(400).json({error:'First name, last_name: incorrect format'})

    let regEmail=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
    if(!regEmail.test(email)) return res.status(400).json({error:'email: incorrect format'})

    let contactos=dao.get()
    let existe=contactos.find(c=>c.email===email)
    if(existe) return res.status(400).json({error:`Ya existe un usuario con email ${email} en la BD`})

    let contacto
    try {
        contacto=await dao.create({nombre:first_name, apellido:last_name, email, tel:phone_number})
    } catch (error) {
        return res.status(500).json({error:error.message})        
    }
    res.status(201).json({mensaje:`Contact registered correctly - ${email}`})
})