const express=require('express');
const handlebars=require('express-handlebars')
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.engine('handlebars',handlebars.engine())
app.set('views',__dirname+'/views')
app.set('view engine','handlebars')

app.get('/',(req,res)=>{

    // codigo

    let nombre='Diego'

    res.setHeader('Content-Type','text/html');
    res.status(200).render('home',{
        nombre,
        titulo:'Home Page'
    });
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
