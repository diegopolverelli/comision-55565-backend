import express from 'express';
import handlebars from 'express-handlebars'
import zlib from 'zlib'
import compression from 'express-compression'
// compression
const PORT=3000;

const app=express();

// app.use(compression())
app.use(compression({brotli:{enabled:true}}))

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("./src/public"))
app.engine('handlebars', handlebars.engine())
app.set('view engine', 'handlebars')
app.set('views', './src/views')


app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

app.get('/textoLargo',(req,res)=>{

    let textoLargo="Texto muuuuy largo... ".repeat(100000)
    let textoComprimido=zlib.gzipSync(textoLargo, {level:9})
    console.log("Tamaño texto sin comprimir:", Buffer.from(textoLargo).byteLength)
    console.log("Tamaño texto comprimido en zip:", Buffer.from(textoComprimido).byteLength)
    
    textoComprimido=zlib.deflateSync(textoLargo, {level:1})
    console.log("Tamaño texto comprimido en deflate:", Buffer.from(textoComprimido).byteLength)

    textoComprimido=zlib.brotliCompressSync(textoLargo, {params:{[zlib.constants.BROTLI_PARAM_QUALITY]:1}})
    console.log("Tamaño texto comprimido en Brotli:", Buffer.from(textoComprimido).byteLength)

    res.setHeader('Content-Type','text/plain');
    // res.setHeader('Content-Encoding','gzip');
    // res.setHeader('Content-Encoding','deflate');
    res.setHeader('Content-Encoding','br');
    res.status(200).send(textoComprimido);
})






app.get('/prueba',(req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.status(200).render('prueba');
})


const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
