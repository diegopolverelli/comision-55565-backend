import express from 'express';
import {fork} from 'child_process'
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

let contador=0
app.get('/',(req,res)=>{
    contador++

    let mensaje=`Visitas: ${contador}`
    res.setHeader('Content-Type','text/html');
    res.status(200).send(mensaje);
})

let saludo="HOLA"
app.get('/saludo',(req,res)=>{

    if(saludo==="HOLA"){
        saludo="CHAU"
    }else{
        saludo="HOLA"
    }

    res.setHeader('Content-Type','text/html');
    res.status(200).send(saludo);
})

app.get('/sumaBloq',(req,res)=>{
    
    console.time("marca1")
    let resultado=0

    for(let i=0; i<=50_000; i++){
        resultado++
        console.log(resultado)
    }
    console.timeEnd("marca1")

    res.setHeader('Content-Type','application/json');
    res.status(200).json({
        resultado
    });
});

app.get('/sumaNoBloq',(req,res)=>{
    let child=fork("./src/suma.js")

    child.send(`Soy el app.js, pid: ${process.pid}. Necesito que te ejecutes...!!!`)

    child.on("message",(resultado)=>{
        res.setHeader('Content-Type','application/json');
        res.status(200).json({
            resultado
    })

    
    });
});


const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
