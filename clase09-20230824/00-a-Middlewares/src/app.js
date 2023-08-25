const express=require('express');
const fs=require('fs')
const os=require('os')
const routerVillanos=require('./routes/routerVillanos')
const PORT=3000;

const logMidd=(req,res,next)=>{
    let logPath=__dirname+'/app.log'
    if(fs.existsSync(logPath)){
        fs.appendFileSync(logPath,'\n'+new Date().toUTCString()+' - url: '+req.url+' - metodo: '+req.method+' - usuario: '+os.userInfo().username )
    }else{
        fs.writeFileSync(logPath,new Date().toUTCString()+' - url: '+req.url+' - metodo: '+req.method+' - usuario: '+os.userInfo().username )
    }

    next()

}

const middleware01=(req, res, next)=>{
    console.log('pasó por mid 01')

    next()
}

function middleware02(req,res,next){
    console.log('pasó por mid 02')

    req.dato01='DATO AGREGADO POR EL MIDDLEWARE'

    let {nombre}=req.query

    if(nombre){
        if(nombre.toLowerCase()==='musan') return res.status(401).send('Usuario inhabilitado')
        req.query.nombre=nombre.toUpperCase()
    }

    next()  
}

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(logMidd)

// middlewares a nivel app
// app.use(middleware02, middleware01, (req,res,next)=>{
//     console.log('pasó x un mid definido "on line" en app...')
//     next()
// })

app.get('/',(req,res)=>{

    // throw new Error('error forzado')
    req.query.funcion1()

    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

// mid. a nivel de endpoint
app.get('/saludo',middleware02,(req,res)=>{

    console.log('dato01: ',req.dato01)
    if(req.query.nombre){
        console.log(req.query.nombre)
    }

    res.setHeader('Content-Type','text/plain');
    res.status(200).send('Hola...!!!');
})

// mid. a nivel de router
app.use('/api/villanos', middleware01, routerVillanos)

// middlewares de error
app.use((error, req, res, next)=>{
    if(error){
        let logPath=__dirname+'/app.log'
        if(fs.existsSync(logPath)){
            fs.appendFileSync(logPath,'\n***ERROR*** - '+new Date().toUTCString()+' - url: '+req.url+' - metodo: '+req.method+' - usuario: '+os.userInfo().username )
        }else{
            fs.writeFileSync(logPath,'***ERROR*** - '+new Date().toUTCString()+' - url: '+req.url+' - metodo: '+req.method+' - usuario: '+os.userInfo().username )
        }
        return res.status(500).json({error:'Error inesperado. Contacte al administrador', message:error.message})
    }

    next()
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
