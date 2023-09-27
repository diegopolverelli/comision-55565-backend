import express from 'express';
import session from 'express-session'
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(session({
    secret:'coderSecret',
    resave:true,
    saveUninitialized:true
}))

let usuarios=[
    {
        nombre:'Diego', password:'123', 
        rol: 'usuario'
    },
    {
        nombre:'Laura', password:'123', 
        rol: 'usuario'
    },
    {
        nombre:'Admin', password:'codercoder', 
        rol: 'admin'
    },
]

const auth=(req, res, next)=>{
    if(req.session.usuario){
        return next()
    }else{
        return res.status(401).send('Tiene que hacer login: /login')
    }
}

app.get('/logout',(req,res)=>{

    req.session.destroy(error=>console.log(error))

    res.send('Logout ok...!!!')

})

app.get('/login',(req,res)=>{

    let {nombre, password}=req.query
    if(!nombre || !password) return res.sendStatus(400)

    let usuario=usuarios.find(u=>u.nombre===nombre && u.password===password)
    if(usuario){
        req.session.usuario=usuario
        return res.send('Login ok...!!!')
    }else{
        return res.sendStatus(401)
    }

})

app.get('/',auth,(req,res)=>{

    console.log(req.session)

    if(Object.keys(req.query).length>0){
        if(req.session.query){
            req.session.query.push(req.query)
        }else{
            req.session.query=[
                {
                    query:req.query
                }
            ]
        }
    }

    if(req.session.contador){
        req.session.contador++
        res.setHeader('Content-Type','text/plain');
        res.status(200).send(`Hola...!!! has visitado esta ruta en ${req.session.contador} oportunidades`);
    
    }else{
        req.session.contador=1
        

        res.setHeader('Content-Type','text/plain');
        res.status(200).send(`Bienvenido`);
    }

})

app.get('/reset',(req,res)=>{
    
    req.session.destroy(error=>{
        if(error){
            return res.status(500).json({
                message:'Error inesperado', error
            })
        }
    })

    res.setHeader('Content-Type','application/json');
    res.status(200).json({
        message:'Contador reiniciado'
    });
});

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
