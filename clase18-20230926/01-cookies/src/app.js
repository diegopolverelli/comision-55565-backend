import express from 'express';
import cookieParser from 'cookie-parser'
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cookieParser('claveSecreta'))

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

app.get('/set',(req,res)=>{

    let info={
        nombre:'Juan',
        color:'red',
        font:'Arial'
    }

    res.cookie('cookie01',info)
    res.cookie('cookie02Vto',info,{maxAge:1000*5})
    res.cookie('cookie03Vto',info,{expires: new Date(2023, 11, 18)})
    res.cookie('cookie04Firmada',info,{signed:true})
    res.cookie('cookie05VtoFirmada',info,{expires: new Date(2023, 11, 18), signed:true})

    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

app.get('/get',(req,res)=>{

    let cookies=req.cookies
    console.log(cookies)

    let cookiesFirmadas=req.signedCookies
    console.log(cookiesFirmadas)

    let nombresCookies=Object.keys(cookies)
    nombresCookies.forEach(nombre=>console.log(cookies[nombre]))

    res.setHeader('Content-Type','text/plain');
    res.status(200).json({cookies, cookiesFirmadas});
})

app.get('/del',(req,res)=>{

    // res.clearCookie('cookie01')

    let nombresCookies=Object.keys(req.cookies)
    nombresCookies.forEach(nombre=>res.clearCookie(nombre))

    nombresCookies=Object.keys(req.signedCookies)
    nombresCookies.forEach(nombre=>res.clearCookie(nombre))

    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
