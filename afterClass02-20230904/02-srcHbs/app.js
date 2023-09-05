import __dirname from './utils.js';
import path from 'path';
import express from 'express';
import {engine} from 'express-handlebars';

const PORT=3000;

const app=express();

// app.engine('handlebars', engine());
// app.set('view engine', 'handlebars');
// app.set('views', path.join(__dirname,'/views'));

app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname,'/views'));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname,'/public')));



app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.status(200).render('home');
})


app.get('/contacto',(req,res)=>{

    // validacion return res.status(400).send('Faltan datos')


    res.setHeader('Content-Type','text/html');
    res.status(200).render('vistaContacto');
    console.log('hola')
})


app.get('/info',(req,res)=>{

    // validacion return res.status(400).send('Faltan datos')


    res.setHeader('Content-Type','text/html');
    res.status(200).render('info');
})
const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
