const router=require('./router/router').router

const http = require('http');
const url = require('url');

const PORT = 3000;
const host = 'localhost';

let obj1={
    saludo:()=>console.log('hola'),
    nombre:'Juan'
}

obj1.saludo()
let funcion=obj1['saludo']
funcion()



const server = http.createServer((req, res) => {
    if (req.url === '/favicon.ico') {
        res.writeHead(204); // Responde con "No Content" y termina la solicitud
        res.end();
        return;
    }

    const parsedUrl = url.parse(req.url, true); // Parsea la URL
    const pathname = parsedUrl.pathname; // Obtiene la ruta de la URL

    const handler = router[pathname] || router['default'];

    handler(req, res);
});

server.listen(PORT, host, () => {
    console.log(`Servidor escuchando en ${host}:${PORT}`);
});
