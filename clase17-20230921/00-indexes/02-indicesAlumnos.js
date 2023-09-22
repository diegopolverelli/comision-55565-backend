import mongoose from 'mongoose';

let alumnoModelo=mongoose.model('alumnos', new mongoose.Schema({
    codigo: Number,
    nombre: {
        type: String, index: true
    }, 
    apellido: String,
    email: String,
    estudios: String,
    origen: String,
    promedio: Number
  },{collection:'bigAlumnos'}))
  
const conectar = async () => {
    try {
        await mongoose.connect('mongodb+srv://coderhouse:coderhouse@cluster0.5rl5n6j.mongodb.net/?retryWrites=true&w=majority&dbName=clase17')
        console.log(`Conexión a DB establecida`)

        // let usuarios=await alumnoModelo.find()
        // console.log(usuarios)     

        
        // let resultado=await alumnoModelo.find().explain('executionStats')
        // console.log(JSON.stringify(resultado, null, 5))     

        let resultado=await alumnoModelo.find({nombre:'Marcos'}).explain('executionStats')
        console.log(JSON.stringify(resultado, null, 5)) 

        // let resultado=await alumnoModelo.findOne({nombre:'Bill'}).explain('executionStats')
        // console.log(JSON.stringify(resultado.executionStats, null, 5)) 

        // let resultado=await alumnoModelo.findOne({nombre:'Domingo'}).explain('executionStats')
        // console.log(JSON.stringify(resultado.executionStats, null, 5)) 

        // listar indices:
        let indices=await alumnoModelo.listIndexes()
        console.log(indices)

        process.exit()

    } catch (err) {
        console.log(`Error al conectarse con el servidor de BD: ${err.message}`)
    }
}

conectar();
