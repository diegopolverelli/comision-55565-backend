import { Router } from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken'
import { config } from '../config/config.js';
export const router=Router()

router.post('/registro', function(req, res, next) {
    passport.authenticate('registro', function(err, user, info, status) {
      if (err) { return next(err) }
      if (!user) { return res.redirect(`/registro?error=${info.message?info.message:info.toString()}`) }
    //   res.redirect('/account');
        req.user=user
        return next()
    })(req, res, next);
  } ,(req,res)=>{

    res.status(200).redirect(`/login?mensaje=Usuario ${req.user.nombre} registrado correctamente. Username: ${req.user.email}`)
})


router.post('/login', function(req, res, next) {
    passport.authenticate('login', function(err, user, info, status) {
      if (err) { return next(err) }
      if (!user) { return res.redirect(`/login?error=${info.message?info.message:info.toString()}`) }
    //   res.redirect('/account');
        req.user=user
        return next()
    })(req, res, next);
  } ,(req,res)=>{

    // jwt.verify(token, config.SECRET, ()=>{

    // })

    let token=jwt.sign({usuario:{
      nombre:req.user.nombre, email:req.user.email, rol: req.user.rol
    }}, config.SECRET, {expiresIn:'1h'})

    res.cookie('coderCookie', token, {httpOnly:true})
    res.status(200).redirect(`/perfil?mensaje=Usuario ${req.user.nombre} logueado correctamente. Rol: ${req.user.rol}`)
})

// app.get('/protected', function(req, res, next) {
//     passport.authenticate('local', function(err, user, info, status) {
//       if (err) { return next(err) }
//       if (!user) { return res.redirect('/signin') }
//       res.redirect('/account');
//     })(req, res, next);
//   });

router.get('/logout',(req,res)=>{
  
  res.clearCookie('coderCookie')

  // res.setHeader('Content-Type','application/json');
  res.status(200).redirect("/login?mensaje=Logout correcto");
});