import express from 'express';
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

let frase='Frase Inicial'

app.get('/api/palabras',(req,res)=>{
    
    res.setHeader('Content-Type','application/json');
    res.status(200).json({
        frase
    });
});

app.post('/api/palabras',(req,res)=>{
    
    let {palabra}=req.body
    if(!palabra) return res.status(400).json({error:'Ingrese una palabra para agregar'})

    if(frase.length>0){
        frase+=' '+palabra
    } else frase=palabra

    console.log(frase.split(' '))

    res.setHeader('Content-Type','application/json');
    res.status(200).json({
        fraseNuevo:frase,
        cantidadPalabras: frase.split(' ').length
    });
});

app.put('/api/palabras/:posicion',(req,res)=>{
    
    let posicion=parseInt(req.params.posicion)
    if(isNaN(posicion)) {
        return res.status(400).json({error:'Posicion debe ser numerica'})
    }

    let {palabra}=req.body
    if(!palabra) return res.status(400).json({error:'Ingrese una palabra para agregar'})

    let fraseArray=frase.split(' ')
    if(posicion<1 || posicion>fraseArray.length) {
        return res.status(400).json({error:'Posicion invalida'})
    }

    let palabraReemplazada=fraseArray[posicion-1]
    fraseArray[posicion-1]=palabra

    frase=fraseArray.join(' ')

    res.setHeader('Content-Type','application/json');
    res.status(200).json({
        fraseNueva:frase,
        palabraReemplazada
    });
});

app.delete('/api/palabras/:posicion',(req,res)=>{
    
    let posicion=parseInt(req.params.posicion)
    if(isNaN(posicion)) {
        return res.status(400).json({error:'Posicion debe ser numerica'})
    }

    let fraseArray=frase.split(' ')
    if(posicion<1 || posicion>fraseArray.length) {
        return res.status(400).json({error:'Posicion invalida'})
    }

    let palabraEliminada=fraseArray[posicion-1]
    fraseArray.splice(posicion-1,1)

    frase=fraseArray.join(' ')

    res.setHeader('Content-Type','application/json');
    res.status(200).json({
        fraseNueva:frase,
        palabraEliminada
    });
});



const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
