import mongoose from 'mongoose';

const usuariosEsquema = new mongoose.Schema({
    first_name: {
        type: String, 
        index:true
    }, 
    last_name: String,
    email: String, gender: String, code: Number
}, { collection: 'bigUsers' })

usuariosEsquema.index({email:-1})
usuariosEsquema.index({email:-1, last_name:1})
usuariosEsquema.index({email:"text"})


export const usuariosModelo = mongoose.model('usuarios', usuariosEsquema)

const conectar = async () => {
    try {
        await mongoose.connect('mongodb+srv://coderhouse:coderhouse@cluster0.5rl5n6j.mongodb.net/?retryWrites=true&w=majority&dbName=clase17')
        console.log(`Conexión a DB establecida`)

        // let usuarios=await usuariosModelo.find()
        // console.log(usuarios)     

        
        // let resultado=await usuariosModelo.find().explain('executionStats')
        // console.log(JSON.stringify(resultado, null, 5))     

        // let resultado=await usuariosModelo.find({first_name:'Bill'}).explain('executionStats')
        // console.log(JSON.stringify(resultado, null, 5)) 

        // let resultado=await usuariosModelo.findOne({first_name:'Bill'}).explain('executionStats')
        // console.log(JSON.stringify(resultado.executionStats, null, 5)) 

        let resultado=await usuariosModelo.findOne({first_name:'Marcellina'}).explain('executionStats')
        console.log(JSON.stringify(resultado.executionStats, null, 5)) 

        // listar indices:
        let indices=await usuariosModelo.listIndexes()
        console.log(indices)

        process.exit()

    } catch (err) {
        console.log(`Error al conectarse con el servidor de BD: ${err.message}`)
    }
}

conectar();
