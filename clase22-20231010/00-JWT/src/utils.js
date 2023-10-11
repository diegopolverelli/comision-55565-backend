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
    let authHeader=req.headers.authorization
    if(!authHeader) return res.status(401).json({error:"No existe token"})

    let token=authHeader.split(' ')[1]

    jwt.verify(token, PRIVATE_KEY, (error, credenciales)=>{
        if(error) return res.status(401).json({error:"Token invalido"})

        console.log(credenciales)

        req.user=credenciales.usuario

        next()
    })

} // fin validarJWT
