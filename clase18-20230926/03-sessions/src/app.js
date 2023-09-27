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

app.get('/',(req,res)=>{

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
