import express from 'express';
import fs from 'fs'
import path from 'path'
import { engine } from 'express-handlebars';
import cookieParser from 'cookie-parser'
import passport from 'passport';
import { inicializarPassport } from './config/passport.config.js';
import __dirname, { generaJWT, passportCall, validaJWT } from './utils.js';
const PORT = 3000;

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, '/views'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./src/public'))
app.use(cookieParser())
inicializarPassport()
app.use(passport.initialize())

app.get('/', (req, res) => {
    // res.setHeader('Content-Type', 'text/html');
    res.status(200).render('home');
})

let usuarios = []
if (fs.existsSync('./src/usuarios.json')) {
    usuarios = JSON.parse(fs.readFileSync('./src/usuarios.json', 'utf-8'))
}

app.post('/registro', (req, res) => {
    let { nombre, email, password } = req.body
    if (!nombre || !email || !password) return res.status(400).json({error:'Ingrese todos los datos'})

    let usuario = usuarios.find(u => u.email === email)
    if (usuario) return res.status(400).json({error:`El usuario ${email} ya existe en la DB`})

    let id = 1
    if (usuarios.length > 0) id = usuarios[usuarios.length - 1].id + 1

    usuario = {
        id, nombre, email, password
    }

    usuarios.push(usuario)

    fs.writeFileSync('./src/usuarios.json', JSON.stringify(usuarios, null, 5))

    res.json({
        usuarioCreado: usuario
    })
})

app.post('/login', (req, res) => {
    let { email, password } = req.body
    if (!email || !password) return res.status(400).json({error:'Ingrese email y password'} )

    usuarios = JSON.parse(fs.readFileSync('./src/usuarios.json', 'utf8'))

    let usuario = usuarios.find(u => u.email === email && u.password === password)
    if (!usuario) return res.status(400).json({error:`Error credenciales`} )

    let token = generaJWT(usuario)

    res.cookie('coderCookie',token,{
        maxAge:1000*60*60,
        httpOnly:true
    })
    return res.status(200).json({
        usuarioLogueado: usuario,
        token
    })

})

// app.get('/usuario', validaJWT,(req, res) => {
// app.get('/usuario', passport.authenticate('jwt',{ session:false }),(req, res) => {
    
// Aplico el passport call aca
app.get('/usuario', passportCall('jwt'),(req, res) => {
    
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json({
        mensaje: 'Bienvenido...!!!',
    });
});

// ((a, b)=>console.log(a+b))(5, 4);
// ((a, b)=>console.log(a+b))(10, 9);


// ejemplo:
app.get('/protected', function(req, res, next) {
    passport.authenticate('local', function(err, user, info, status) {
      if (err) { return next(err) }
      if (!user) { return res.redirect('/signin') }
      res.redirect('/account');
    })(req, res, next);
  });

const server = app.listen(PORT, () => {
    console.log(`Server escuchando en puerto ${PORT}`);
});
