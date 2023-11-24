import express from 'express';
import { router as pruebasRouter } from './routes/pruebaRouter.js';
import cluster from 'cluster'
import os from 'os'

const cantidadCPUs=os.cpus().length

if(cluster.isPrimary){
    console.log(`Proceso Primary. PID: ${process.pid}. Generando workers...`)
    // cluster.fork()
    // cluster.fork()
    // cluster.fork()

    for(let i=0; i<cantidadCPUs; i++){
        cluster.fork()
    }

    cluster.on("message", (worker, mensaje)=>{
        console.log(`Soy el primary, recibí un mensaje del worker ${worker.id} que dice: "${mensaje}"`)
    })

    cluster.on("exit",worker=>{
        console.log(`Soy el primary y se acaba de caer el worker ${worker.id}. Voy a generar un reemplazo...!!!`)
        cluster.fork()
    })

}else{
    console.log(`Proceso worker ${cluster.worker.id} - PID: ${process.pid}`)

    const PORT=3000;

    const app=express();
    
    app.use(express.json());
    app.use(express.urlencoded({extended:true}));
    
    app.use('/',(req, res, next)=>{
        req.cluster=cluster
        next()
    }, pruebasRouter)
    
    const server=app.listen(PORT,()=>{
        console.log(`Server escuchando en puerto ${PORT}`);
    });
    
}

