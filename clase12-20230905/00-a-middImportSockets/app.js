import __dirname from './utils.js';
import path from 'path';
import express from 'express';
import {engine} from 'express-handlebars';
import {Server} from 'socket.io'

import { router as routerHeroes } from './routes/routerHeroes.js';

const PORT=3000;

const app=express();


app.engine('handlebars', engine({
runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true,
},
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname,'/views'));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname,'/public')));

app.use('/api/heroes',(req, res, next)=>{
    req.io=io
    next()
},routerHeroes)


app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.status(200).render('home');
})

app.get('/heroes',(req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.status(200).render('heroes');
})


const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
export const io=new Server(server)


io.on('connection',socket=>{
    console.log(`Cliente conectado: ${socket.id}...!!!`)

    socket.on('saludo',nombre=>console.log(nombre))

    socket.on('nuevoHeroe',nombre=>{
        console.log(nombre)
    })

})
