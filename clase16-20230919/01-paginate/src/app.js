import __dirname from './utils.js';
import path from 'path';
import express from 'express';
import { engine } from 'express-handlebars';
import mongoose from 'mongoose';
import { usuariosModelo } from './models/usuarios.model.js';

const PORT = 3000;

const app = express();

// app.engine('handlebars', engine({
//     runtimeOptions: {
//         allowProtoPropertiesByDefault: true,
//         allowProtoMethodsByDefault: true,
//     },
// }));
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, './views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, './public')));


app.get('/usuarios', async (req, res) => {

    // let usuarios=await usuariosModelo.find().limit(10).lean()
    // let usuarios=await usuariosModelo.find().limit(10)
    // usuarios=usuarios.map(usuario=>usuario.toJSON())
    // for(let i=0; i<usuarios.length; i++){
    //     usuarios[i]=usuarios[i].toObject()
    // }

    let pagina=req.query.pagina
    if(!pagina) pagina=1

    let usuarios = await usuariosModelo.paginate({}, { limit: 20, lean: true, page:pagina })
    console.log(usuarios)

    let { totalPages,
        hasPrevPage,
        hasNextPage,
        prevPage,
        nextPage } = usuarios

    res.setHeader('Content-Type', 'text/html');
    res.status(200).render('index', {
        usuarios: usuarios.docs,
        totalPages,
        hasPrevPage,
        hasNextPage,
        prevPage,
        nextPage
    });
})

const server = app.listen(PORT, () => {
    console.log(`Server escuchando en puerto ${PORT}`);
});

const conectar = async () => {
    try {
        await mongoose.connect('mongodb+srv://coderhouse:coderhouse@cluster0.5rl5n6j.mongodb.net/?retryWrites=true&w=majority&dbName=clase16')
        console.log(`Conexión a DB establecida`)
    } catch (err) {
        console.log(`Error al conectarse con el servidor de BD: ${err}`)
    }
}

conectar();
