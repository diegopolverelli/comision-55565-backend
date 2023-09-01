import __dirname from './utils.js';
import path from 'path';
import express from 'express';
import {engine} from 'express-handlebars';
import {Server} from 'socket.io'

const PORT=3000;

const app=express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname,'/views'));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname,'/public')));

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.status(200).render('home');
})

app.get('/chat',(req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.status(200).render('chat');
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});

let mensajes=[{
    emisor:'Server',
    mensaje:'Bienvenido al chat del curso Backend...!!!'
}]

let usuarios=[]

const io=new Server(server)

io.on('connection',socket=>{
    console.log(`Se ha conectado un cliente con id ${socket.id}`)


    socket.on('id', nombre=>{
        console.log(nombre)

        usuarios.push({
            id: socket.id,
            nombre
        })

        socket.emit('bienvenida', mensajes)

        socket.broadcast.emit('nuevoUsuario', nombre)

    })

    socket.on('nuevoMensaje',mensaje=>{
        mensajes.push(mensaje)

        io.emit('llegoMensaje', mensaje)

    })

    socket.on('disconnect',()=>{
        console.log(`se desconecto el cliente con id ${socket.id}`)
        let indice=usuarios.findIndex(usuario=>usuario.id===socket.id)
        let usuario=usuarios[indice]
        io.emit('usuarioDesconectado', usuario)
        console.log(usuario)
        usuarios.splice(indice,1)
    })

})
