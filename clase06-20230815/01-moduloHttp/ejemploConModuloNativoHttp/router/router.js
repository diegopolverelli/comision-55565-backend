const router = {
    '/': (req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('¡Bienvenido a la página de inicio!');
    },

    '/contacto': (req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('Página de contacto');
    },

    '/datos': (req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('Página de datos');
    },

    '/create': (req, res) => {
        if (req.method === 'POST') {
            let body = '';
            
            req.on('data', (data) => {
                body += data;
            });

            req.on('end', () => {
                const parsedBody = JSON.parse(body); // Suponiendo que se envía JSON en el cuerpo
                // Aquí puedes manejar los datos enviados en parsedBody
                // Y luego responder al cliente

                console.log(parsedBody)

                res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                res.end('¡Datos recibidos y procesados!');
            });
        } else {
            res.writeHead(405, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end('Método no permitido');
        }
    },

    '/update': (req, res) => {
        if (req.method === 'PUT') {
            // Similar a /create, maneja los datos del cuerpo y responde
        } else {
            res.writeHead(405, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end('Método no permitido');
        }
    },

    '/delete': (req, res) => {
        if (req.method === 'DELETE') {
            // Maneja la solicitud DELETE y responde
        } else {
            res.writeHead(405, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end('Método no permitido');
        }
    },

    'default': (req, res) => {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>Página no encontrada</h1>');
    }
};


module.exports={router}