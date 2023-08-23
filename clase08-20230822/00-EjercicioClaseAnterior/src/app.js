const express=require('express');
const path=require('path')
const fs=require('fs')

let ruta=path.join(__dirname,'archivos','usuarios.json') 

function getUsers(){
    if(fs.existsSync(ruta)){
        return JSON.parse(fs.readFileSync(ruta,'utf-8'))
    }else{
        return []
    }
}

function saveUsers(users){
    fs.writeFileSync(ruta, JSON.stringify(users, null, 5))    
}

const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/api/users',(req,res)=>{

    let users=getUsers()

    res.setHeader('Content-Type','application/json');
    res.status(200).json({data:users});
})

app.post('/api/users',(req,res)=>{
    console.log(req.body)

    let {nombre, apellido}=req.body

    if(!nombre || !apellido){
        return res.status(400).json({error:'Complete nombre y apellido x el body'})
    }

    let users=getUsers()

    let id=1
    if(users.length>0){
        id=users[users.length-1].id + 1
    }

    let nuevoUsuario={
        id, nombre, apellido
    }

    users.push(nuevoUsuario)

    saveUsers(users)

    res.status(201).json({nuevoUsuario})
})

app.put('/api/users/:id',(req,res)=>{

    let id=parseInt(req.params.id)
    if(isNaN(id)){
        return res.status(400).json({error:'El id debe ser numerico'})
    }

    let {nombre, apellido}=req.body

    if(!nombre && !apellido){
        return res.status(400).json({error:'Complete nombre y/o apellido a modificar en el body'})
    }

    let users=getUsers()

    let indice=users.findIndex(usuario=>usuario.id===id)
    if(indice===-1){
        return res.status(400).json({error:`El id ${id} no existe`})
    }

    if(nombre){
        users[indice].nombre=nombre
    }

    if(apellido){
        users[indice].apellido=apellido
    }

    saveUsers(users)

    res.status(200).json({usuarioModificado:users[indice]})


})

app.delete('/api/users/:id',(req,res)=>{

    let id=parseInt(req.params.id)
    if(isNaN(id)){
        return res.status(400).json({error:'El id debe ser numerico'})
    }

    let users=getUsers()

    let indice=users.findIndex(usuario=>usuario.id===id)
    if(indice===-1){
        return res.status(400).json({error:`El id ${id} no existe`})
    }

    let usuarioEliminado=users.splice(indice,1)

    saveUsers(users)

    res.status(200).json({usuarioEliminado})


})



const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
