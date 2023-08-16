const express=require('express')

const PORT=3000

const app=express()

app.get('/',(req, res)=>{
    res.send('Hola, soy un server desarrollado con ExpressJS')
})

app.get('/contacto',(req, res)=>{
    res.send('CONTACTO')
})

app.post('/create',(req, res)=>{
    res.send('se llamo a un metodo POST')
})

app.get('/datos',(req, res)=>{
    res.send('DATOS')
})

app.get('*',(req, res)=>{
    res.send('error 404 - page not found')
})


app.listen(PORT,()=>{
    console.log(`Server corriendo en puerto ${PORT}`)
})
