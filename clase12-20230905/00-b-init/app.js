import express from 'express';
import { init, router } from './router.js';
export const numero=200
let nombres=['Juan','Magdalena']
const PORT=3000;
const app=express();

init(numero, nombres)

console.log(nombres,'desde app')


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api',router)

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
