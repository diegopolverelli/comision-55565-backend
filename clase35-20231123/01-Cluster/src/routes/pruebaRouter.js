import { Router } from 'express';
export const router=Router()

router.get('/op1',(req,res)=>{

    let resultado=Math.floor(Math.random()*(99)+1)      // Math.floor(Math.random()*(cantNrosAGenerar)+aPartirDelNro)
    // console.log(resultado)
    // console.log(`Soy el worker ${req.cluster.worker.id} -  PID ${process.pid}, y genere para op1 el resultado ${resultado}`)
    process.send(`Soy el worker ${req.cluster.worker.id} -  PID ${process.pid}, y genere para op1 el resultado ${resultado}`)

    res.setHeader('Content-Type','application/json')
    res.status(200).json({resultado})
})

router.get('/op2',(req,res)=>{

    let resultado=0
    for(let i=0; i<50_000_000; i++){
        let valor=Math.floor(Math.random()*(99)+1)      // Math.floor(Math.random()*(cantNrosAGenerar)+aPartirDelNro)
        resultado+=valor
    }
    // console.log(resultado)
    // console.log(`Soy el worker ${req.cluster.worker.id} -  PID ${process.pid}, y genere para op2 el resultado ${resultado}`)
    process.send(`Soy el worker ${req.cluster.worker.id} -  PID ${process.pid}, y genere para op2 el resultado ${resultado}`)


    res.setHeader('Content-Type','application/json')
    res.status(200).json({resultado})
})