const http=require('http')
const url=require('url')

const PORT=3000

const server=http.createServer((req, res)=>{
    
    console.log(req.url)
    let urlParsed=url.parse(req.url, true)
    console.log(urlParsed)
    switch (urlParsed.pathname) {
        case '/datos':
            res.end('DATOS '+urlParsed.query.nombre)
            
            break;

        case '/':
            res.end('Hola, soy un servidor desarrollado con el modulo http.')
            
            break;

        case '/contacto':
            res.end('CONTACTO')
            
            break;
    
        default:
            res.end('error 404 - page not found')

            break;
    }
    
})

server.listen(PORT,()=>{
    console.log(`Server corriendo en puerto ${PORT}`)
})
