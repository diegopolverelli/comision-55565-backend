import express from 'express';
import { router as negociosRouter} from './routes/negocios.router.js';
import { router as usuariosRouter} from './routes/usuarios.router.js';
import { router as ordenesRouter } from './routes/ordenes.router.js';
import { config } from './config/config.js';
import mongoose from 'mongoose';


const PORT=config.server.PORT;

// console.log(process.argv)

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/negocios', negociosRouter)
app.use('/api/usuarios', usuariosRouter)
app.use('/api/ordenes', ordenesRouter)

try {
    mongoose.connect(config.database.MONGO_URL,{
        dbName:config.database.DB_NAME
    })
    console.log('DB online...!!!')
} catch (error) {
    console.log(error.message)
    process.exit()
}
const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
