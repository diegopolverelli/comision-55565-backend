const express=require('express')

const starWars=require('./../../recursos').starWars

const PORT=3000

const app=express()


app.get('/starwars',(req,res)=>{

    console.log(req.query)
    let {gender}=req.query
    // let gender=req.query.gender

    let resultado=starWars

    resultado=resultado.filter(personaje=>personaje.gender===gender)

    res.json(resultado)

})

app.get('/starwars2',(req,res)=>{

    let filtros=Object.entries(req.query)
    console.log(filtros)

    let resultado=starWars

    filtros.forEach(filtro=>{
        resultado=resultado.filter(personaje=>personaje[filtro[0]]===filtro[1])
    })


    res.json(resultado)

})



app.listen(PORT,()=>{
    console.log(`Server corriendo en puerto ${PORT}`)
})