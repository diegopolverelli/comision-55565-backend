import express from 'express';
import { router as palabrasRouter} from './routes/palabras.router.js';

const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/palabras',palabrasRouter)

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
