import express from 'express';
import { router as usuariosRouter} from './routes/usuarios.router.js';
import mongoose from 'mongoose'
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

app.use('/api/usuarios',usuariosRouter)

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});

mongoose.connect('mongodb+srv://coderhouse:coderhouse@cluster0.5rl5n6j.mongodb.net/?retryWrites=true&w=majority&dbName=coder')
    .then(console.log('DB Conectada'))
    .catch(error=>console.log(error))
