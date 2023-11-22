import __dirname from './utils.js';
import path from 'path';
import express from 'express';
import {engine} from 'express-handlebars';
import { middLog } from './utils.js';

import { router as vistasRouter } from './routes/vistasRouter.js';
import { router as heroesRouter } from './routes/heroesRouter.js';

const PORT=3000;

const app=express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname,'/views'));

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(middLog)

app.use(express.static(path.join(__dirname,'/public')));

app.use('/', vistasRouter)
app.use('/api/heroes', heroesRouter)

app.post('/logs',(req,res)=>{
    
    console.log(`Recibimos log via http:`, req.body)

    res.setHeader('Content-Type','application/json');
    res.status(200).json({
        log: req.body
    });
});

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
