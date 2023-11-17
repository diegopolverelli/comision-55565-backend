import express from 'express';
import {suma} from 'pruebafuncionesdiego1990'
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/suma/:a/:b',(req,res)=>{

    let resultado=suma(req.params.a,req.params.b)

    res.setHeader('Content-Type','text/html');
    res.status(200).send(resultado);
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
