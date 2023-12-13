import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';

import swagger_jsdoc  from 'swagger-jsdoc'
import swaggerUi  from 'swagger-ui-express'

const app = express();
const PORT = process.env.PORT||8080;
const connection = mongoose.connect('mongodb+srv://coderhouse:coderhouse@cluster0.5rl5n6j.mongodb.net/?retryWrites=true&w=majority&dbName=clase39')

const options={
    definition:{
        openapi: '3.0.0',
        info: {
            title: 'API abm usuarios',
            version: '1.0.0',
            description: 'Documentación del proyecto API abm usuarios'
        }
    },
    apis: ["./docs/*.yaml"]
}

const specs=swagger_jsdoc(options)

app.use('/api-docs',swaggerUi.serve, swaggerUi.setup(specs))


app.use(express.json());
app.use(cookieParser());

app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);
app.use('/api/adoptions',adoptionsRouter);
app.use('/api/sessions',sessionsRouter);

app.listen(PORT,()=>console.log(`Listening on ${PORT}`))
