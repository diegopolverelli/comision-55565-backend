import passport from 'passport'
import passportJWT from 'passport-jwt'
import { PRIVATE_KEY } from '../utils.js'

// *
const buscaToken=(req)=>{
    let token=null

    if(req.cookies.coderCookie) {
        console.log("Recupero token, ahora desde una Cookie, y con PASSPORT...!!!")
        token=req.cookies.coderCookie
    }

    return token
}

export const inicializarPassport=()=>{

    passport.use('jwt', new passportJWT.Strategy(
        {
            jwtFromRequest: passportJWT.ExtractJwt.fromExtractors([buscaToken]),
            secretOrKey: PRIVATE_KEY
        },
        (contenidoJwt ,done)=>{
            try {
                return done(null, contenidoJwt.usuario)
            } catch (error) {
                return done(error)
            }
        }
    ))


    // serializers no van, porque jwt
    // no suele trabajar con sessions *


} // fin inicializaPassport