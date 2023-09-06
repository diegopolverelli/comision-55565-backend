const express=require('express');
const PORT=3000;
const nombres=['Juan','Laura']
const router=require('./router')

module.exports={nombres}

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

app.use('/api',router)

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
