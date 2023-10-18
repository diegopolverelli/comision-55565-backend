import express from 'express';
import cookieParser from 'cookie-parser'
import { router as heroesRouter} from './routes/heroes.router.js';
import { UsuariosRouter } from './routes/usuarios.router.js';
import { SessionsRouter } from './routes/sessions.router.js';


const PORT=3000;

const app=express();
const usuariosRouter=new UsuariosRouter()
const sessionsRouter=new SessionsRouter()

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser())

app.use('/api/heroes',heroesRouter)
app.use('/api/usuarios',usuariosRouter.getRouter())
app.use('/api/sessions', sessionsRouter.getRouter())

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});

server.on('error',(error)=>console.log(error));