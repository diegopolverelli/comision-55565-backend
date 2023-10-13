import express from 'express';
import { router as heroesRouter} from './routes/heroes.router.js';
import { UsuariosRouter } from './routes/usuarios.router.js';


const PORT=3000;

const app=express();
const usuariosRouter=new UsuariosRouter()

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/heroes',heroesRouter)
app.use('/api/usuarios',usuariosRouter.getRouter())

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});

server.on('error',(error)=>console.log(error));