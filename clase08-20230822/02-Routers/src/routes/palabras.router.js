import {Router} from 'express'
export const router=Router()

// import express from 'express'
// export const router=express.Router()

let frase='Frase Inicial'

router.get('/',(req,res)=>{
    
    res.setHeader('Content-Type','application/json');
    res.status(200).json({
        frase
    });
});

router.post('/',(req,res)=>{
    
    let {palabra}=req.body
    if(!palabra) return res.status(400).json({error:'Ingrese una palabra para agregar'})

    if(frase.length>0){
        frase+=' '+palabra
    } else frase=palabra

    console.log(frase.split(' '))

    res.setHeader('Content-Type','application/json');
    res.status(200).json({
        fraseNuevo:frase,
        cantidadPalabras: frase.split(' ').length
    });
});

router.put('/:posicion',(req,res)=>{
    
    let posicion=parseInt(req.params.posicion)
    if(isNaN(posicion)) {
        return res.status(400).json({error:'Posicion debe ser numerica'})
    }

    let {palabra}=req.body
    if(!palabra) return res.status(400).json({error:'Ingrese una palabra para agregar'})

    let fraseArray=frase.split(' ')
    if(posicion<1 || posicion>fraseArray.length) {
        return res.status(400).json({error:'Posicion invalida'})
    }

    let palabraReemplazada=fraseArray[posicion-1]
    fraseArray[posicion-1]=palabra

    frase=fraseArray.join(' ')

    res.setHeader('Content-Type','application/json');
    res.status(200).json({
        fraseNueva:frase,
        palabraReemplazada
    });
});

router.delete('/:posicion',(req,res)=>{
    
    let posicion=parseInt(req.params.posicion)
    if(isNaN(posicion)) {
        return res.status(400).json({error:'Posicion debe ser numerica'})
    }

    let fraseArray=frase.split(' ')
    if(posicion<1 || posicion>fraseArray.length) {
        return res.status(400).json({error:'Posicion invalida'})
    }

    let palabraEliminada=fraseArray[posicion-1]
    fraseArray.splice(posicion-1,1)

    frase=fraseArray.join(' ')

    res.setHeader('Content-Type','application/json');
    res.status(200).json({
        fraseNueva:frase,
        palabraEliminada
    });
});

