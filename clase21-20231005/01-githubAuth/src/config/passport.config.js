import passport from 'passport'
import github from 'passport-github2'
import { usuariosModelo } from '../models/usuario.model.js'


export const inicializaPassport=()=>{

    // estrategias
    passport.use('github', new github.Strategy(
        {
            clientID: 'Iv1.15cd63028aefa345', 
            clientSecret: 'c4ac10172d133dfe49290c98a3f0430531bac2a2',
            callbackURL: 'http://localhost:3000/api/sessions/callbackGithub'
        },
        async(token, tokenRefresh, profile, done)=>{
            try {
                console.log(profile)
                let usuario=await usuariosModelo.findOne({email:profile._json.email})
                if(!usuario){
                    usuario=await usuariosModelo.create({
                        nombre: profile._json.name,
                        email: profile._json.email,
                        github: profile
                    })
                }

                done(null, usuario)


            } catch (error) {
                return done(error)
            }
        }
    ))


    // serialize y deserialize
    passport.serializeUser((ususario, done)=>{
        return done(null, ususario._id)
    })

    passport.deserializeUser(async(id, done)=>{
        let usuario=await usuariosModelo.findById(id)
        return done(null, usuario)
    })

} // fin fn inicializaPassport