import express from 'express';
import {suma} from 'pruebafuncionesdiego1990'
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/suma/:a/:b',(req,res)=>{

    let resultado=suma(parseFloat(req.params.a),parseFloat(req.params.b))

    res.setHeader('Content-Type','text/html');
    res.status(200).send(`Resultado: ${resultado}`);
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
