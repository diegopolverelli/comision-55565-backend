import passport from 'passport'
import local from 'passport-local'
import crypto from 'crypto'
import { modeloUsuarios } from '../models/usuarios.models.js';


export const inicializaPassport=()=>{

    passport.use('registro', new local.Strategy(
        {
            usernameField:'email', passReqToCallback:true
        },
        async(req, username, password, done)=>{
            try {

                // logica de registro
                let {nombre, email, password}=req.body

                if(!nombre || !email || !password){
                    // return res.status(400).send('faltan datos')
                    // return res.redirect('/registro?error=Complete email, nombre, y contraseña')
                    done(null, false)
                }
            
                let existe=await modeloUsuarios.findOne({email})
                if(existe){
                    // return res.status(400).send(`Usuario ya está registrado: ${email}`)
                    // return res.redirect('/registro?error='+`Usuario ya está registrado: ${email}`)
                    done(null, false)
                }
            
                password=crypto.createHmac('sha256','palabraSecreta').update(password).digest('base64')
            
                let usuario=await modeloUsuarios.create({
                    nombre, email, password
                })

                console.log('pasando x passport registro...!!!')

                done(null, usuario)
            
            } catch (error) {
                done(error)
            }
        }
    ))


    // passport.use('login', new local.Strategy(
    //     {

    //     },
    //     ()=>{
            
    //     }
    // ))

    passport.serializeUser((user, done)=>{
        done(null, user._id)
    })

    passport.deserializeUser(async(id, done)=>{
        let usuario=await modeloUsuarios.findById(id)
        done(null, usuario)
    })

} // fin de inicializaPassport