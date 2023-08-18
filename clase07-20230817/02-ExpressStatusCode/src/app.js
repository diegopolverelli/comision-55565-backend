import express from 'express';
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

app.get('/suma/:valor1/:valor2',(req, res)=>{

    let valor1=parseInt(req.params.valor1)
    let valor2=parseInt(req.params.valor2)
    
    res.setHeader('Content-Type','application/json');
    if(isNaN(valor1) || isNaN(valor2)){
        return res.status(400).json({message:'Error: envíe argumentos numericos'})
    }

    return res.status(200).json({message:`Resultado: ${valor1+valor2}`})


})

app.get('/apagar',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('El server se apagara en breve...');

    server.closeAllConnections()
    server.close((e)=>{
        if(e) console.log(e)
        console.log('Server apagado')
    })

})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
