const express=require('express');
const usersRouter=require('./routes/users.router')
const heroesRouter=require('./routes/heroes.router')

const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/users',usersRouter)
app.use('/api/heroes',heroesRouter)

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
