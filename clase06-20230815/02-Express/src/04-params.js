const express=require('express')

const PORT=3000

let alumnos = [
    {
        id: 1,
        nombre: 'Esteban',
        apellido: 'Fuertes',
        edad: 49,
        sexo: 'M',
        email: 'efuertes@test.com'
    },
    {
        id: 2,
        nombre: 'Marina',
        apellido: 'Vignau',
        edad: 44,
        sexo: 'F',
        email: 'mvignau@test.com'
    },
    {
        id: 3,
        nombre: 'Laura',
        apellido: 'Miranda',
        edad: 28,
        sexo: 'F',
        email: 'lmiranda@test.com'
    },
    {
        id: 4,
        nombre: 'Marianella',
        apellido: 'Gutierrez',
        edad: 46,
        sexo: 'F',
        email: 'mgutierrez@test.com'
    },
    {
        id: 5,
        nombre: 'Karina',
        apellido: 'Fuertes',
        edad: 32,
        sexo: 'F',
        email: 'kfuertes@test.com'
    },
    {
        id: 6,
        nombre: 'Lucio',
        apellido: 'Aguirre',
        edad: 54,
        sexo: 'M',
        email: 'laguirre@test.com'
    },
    {
        id: 7,
        nombre: 'Pedro',
        apellido: 'Barrios',
        edad: 61,
        sexo: 'M',
        email: 'pbarrios@test.com'
    },
    {
        id: 8,
        nombre: 'Maximiliano',
        apellido: 'Rodriguez',
        edad: 40,
        sexo: 'M',
        email: 'mrodriguez@test.com'
    },
    {
        id: 9,
        nombre: 'Ludmila',
        apellido: 'Palacios',
        edad: 25,
        sexo: 'F',
        email: 'lpalacios@test.com'
    },
    {
        id: 10,
        nombre: 'Ramón',
        apellido: 'Carrillo',
        edad: 40,
        sexo: 'M',
        email: 'rcarrillo@test.com'
    },
]

const app=express()

app.get('/',(req, res)=>{
    res.send('Hola, soy un server desarrollado con ExpressJS')
})

app.get('/bienvenida',(req, res)=>{
    res.send('<h1 style="color:blue;">Bienvenidos al server...!!!</h1>')
})


app.get('/contacto',(req, res)=>{
    res.send('CONTACTO')
})

app.post('/create',(req, res)=>{
    res.send('se llamo a un metodo POST')
})

app.get('/datos',(req, res)=>{
    res.json({status:'ok', data:alumnos})
})

app.get('/datos/:id',(req, res)=>{

    // let id=req.params.id
    let {id}=req.params
    console.log(id, typeof id)

    id=parseInt(id)
    if(isNaN(id)){
        res.json({status:'error', mensaje:'Require un argumento id de tipo numerico'})
        return 
    }

    let resultado=alumnos.filter(alumno=>alumno.id===id)

    if(resultado.length>0){
        res.json({status:'ok', data:resultado})

    }else{
        res.json({status:'error', mensaje:`El id ${id} no existe`})

    }
})

app.get('*',(req, res)=>{
    res.send('error 404 - page not found')
})


app.listen(PORT,()=>{
    console.log(`Server corriendo en puerto ${PORT}`)
})







