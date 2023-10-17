import {fileURLToPath} from 'url';
import { dirname } from 'path';
import jwt from 'jsonwebtoken'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default __dirname;

const PRIVATE_KEY='secretPass'

export const generaJWT=(usuario)=>jwt.sign({usuario},PRIVATE_KEY,{expiresIn:'1h'})

export const validarJWT=(req, res, next)=>{
     // Bearer token  authorization
    
     //  Queremos ver si existe la cabecera de autorizacion. Si no existe se arroja error
     // y si existe, tomar el Bearer token, quedarnos solo con el token y pasarlo por una 
     // funcion de validacion del objeto JWT 
    let authHeader=req.headers.authorization; // se chequea si existe el header authorization
    if(!authHeader) return res.status(401).json({error:"No existe token"});

    // authHeader retorna Bearer token. Entonces separo el string con split cada vez que
    // hay un espacio (con esto obtengo [Bearer, token]) y como quiero el token
    // accedo a la posicion 1
    let token = authHeader.split(' ')[1];  

    jwt.verify(token, PRIVATE_KEY, (error, credenciales) => {
        if(error) return res.status(401).json({error:"Token invalido"})

        console.log(credenciales); // credenciales es el contenido del token

        req.user = credenciales.usuario;

        next();
    })
} // fin validarJWT
