import {fileURLToPath} from 'url';
import { dirname } from 'path';
import jwt from 'jsonwebtoken'
import passport from 'passport';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default __dirname;

export const PRIVATE_KEY='secretPass'

export const generaJWT=(usuario)=>jwt.sign({usuario},PRIVATE_KEY,{expiresIn:'1h'})

export const validaJWT=(req, res, next)=>{
    // let authHeader=req.headers.authorization
    // if(!authHeader) return res.status(400).json({error:'Error - no existe token'})

    // let token=authHeader.split(' ')[1]

    if(!req.cookies.coderCookie) return res.status(400).json({error:'Error - no existe token'})

    console.log("Recupero token, ahora desde una Cookie...!!!")
    let token=req.cookies.coderCookie

    jwt.verify(token, PRIVATE_KEY, (error, credenciales)=>{
        if(error) return res.status(400).json({error:'Error - token invalido'})

        console.log(credenciales)

        req.user=credenciales.usuario

        next()
    })
}



export const passportCall=(estrategia)=>{
    return async function(req, res, next){
        passport.authenticate(estrategia, function(err, usuario, info){
            if(err) return next(err)
            if(!usuario){
                return res.status(401).json({
                    error: info.messages ? info.messages : info.toString(),
                    detalle: info.detalle ? info.detalle : ' - '
                })
            }
            req.user=usuario
            return next()
        })(req, res, next)
    }
}
