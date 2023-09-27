import __dirname from './utils.js';
import path from 'path';
import express from 'express';
import {engine} from 'express-handlebars';
import cookieParser from 'cookie-parser'

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

app.use(cookieParser())

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname,'/public')));

app.get('/get',(req,res)=>{
    
    let cookies=req.cookies

    res.setHeader('Content-Type','application/json');
    res.status(200).send(cookies);
});

app.post('/set',(req,res)=>{

    let nombresCookies=Object.keys(req.cookies)
    nombresCookies.forEach(nombre=>res.clearCookie(nombre))
    
    let {nombre, email}=req.body
    if(!nombre || !email) return res.redirect('/?error=1')

    res.cookie(nombre, email, {maxAge: 1000*10})

    // res.setHeader('Content-Type','application/json');
    res.redirect('/?ok=1');
});

app.get('/',(req,res)=>{

    let error=false
    if(req.query.error) error=true

    let ok=false
    if(req.query.ok) ok=true

    res.setHeader('Content-Type','text/html');
    res.status(200).render('index',{error, ok});
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
