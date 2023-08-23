const express=require('express');
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(__dirname+'/public'))

app.post('/registro',(req,res)=>{

    let {nombre, email}=req.body

    res.setHeader('Content-Type','text/plain');
    res.status(200).send(`Usuario registrado: ${nombre} - email: ${email}`);
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
