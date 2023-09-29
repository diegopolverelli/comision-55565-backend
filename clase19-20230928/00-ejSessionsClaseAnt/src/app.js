import express from 'express';
import session from 'express-session'
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(session({
    secret: 'claveSecreta', 
    saveUninitialized: true,
    resave: true
}))

app.get('/',(req,res)=>{

    console.log(req.session)

    let {nombre}=req.query

    res.setHeader('Content-Type','text/html');
    if(!nombre){
        if(req.session.contador){
            req.session.contador++
            return res.send(`<h2>Hola. Has visitado este sitio en ${req.session.contador} oportunidades</h2>`)
        }else{
            req.session.contador=1
            return res.send(`<h2>Bienvenido...!!!</h2>`)
        }
    }else{
        if(req.session.usuarios){
            let indice=req.session.usuarios.findIndex(u=>u.nombre===nombre)
            if(indice===-1){
                req.session.usuarios.push({nombre, contador:1})
                return res.send(`<h2>Bienvenido ${nombre}...!!!</h2>`)
            }else{
                req.session.usuarios[indice].contador++
                return res.send(`<h2>Hola, ${nombre}. Has visitado este sitio en ${req.session.usuarios[indice].contador} oportunidades</h2>`)
            }
        }else{
            req.session.usuarios=[]
            req.session.usuarios.push({
                nombre, contador:1
            })
            return res.send(`<h2>Bienvenido ${nombre}...!!!</h2>`)
        }
    }

    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
