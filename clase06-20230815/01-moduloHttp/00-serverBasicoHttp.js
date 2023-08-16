const http=require('http')

const PORT=3000

const server=http.createServer((req, res)=>{
    res.end('Hola, soy un servidor desarrollado con el modulo http.')
})

server.listen(PORT,()=>{
    console.log(`Server corriendo en puerto ${PORT}`)
})
