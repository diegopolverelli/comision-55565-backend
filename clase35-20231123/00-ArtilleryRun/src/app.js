import express from 'express';
import { router as sessionsRouter } from './routes/sessionsRouter.js';
import {fakerES_MX as faker} from '@faker-js/faker'
import mongoose from 'mongoose';
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/sessions', sessionsRouter)

app.get('/usuario',(req,res)=>{
    let nombre=faker.person.firstName()
    let apellido=faker.person.lastName()
    let email=faker.internet.email({firstName:nombre, lastName:apellido})
    let password=faker.internet.password({length:6, memorable:true})

    let usuario={nombre, apellido, email, password}
    console.log(`Se generó el usuario mock ${nombre} ${apellido} - ${email}, con password: ${password}`)

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({usuario});
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});

try {
    await mongoose.connect('mongodb+srv://coderhouse:coderhouse@cluster0.5rl5n6j.mongodb.net/?retryWrites=true&w=majority&dbName=clase35')
    console.log('DB online...!!!')
} catch (error) {
    console.log(`Error de conexión a BD: ${error.message}`)
}
