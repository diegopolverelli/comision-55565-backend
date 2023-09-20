import mongoose from "mongoose";

const cursosModelo=mongoose.model('cursos', new mongoose.Schema({
    titulo: String, horas: Number, docente: String
}))

const estudiantesEsquema=new mongoose.Schema({
    nombre: {
        type: String
    }, 
    apellido: String, email: String, 
    cursando:{
        type: [
            {
                curso: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'cursos'
                } 
            }
        ]
    }
})

const estudiantesModelo=mongoose.model('estudiantes',estudiantesEsquema)

try {
    await mongoose.connect('mongodb+srv://coderhouse:coderhouse@cluster0.5rl5n6j.mongodb.net/?retryWrites=true&w=majority',{dbName:'clase16'})
    console.log('DB Online')

    // crear cursos:
    // let curso1=await cursosModelo.create({
    //     titulo: 'Calculo II', horas:4, docente: 'sin asignar'
    // })

    // let curso2=await cursosModelo.create({
    //     titulo: 'Base de datos', horas:8, docente: 'Sabrina Rojas'
    // })

    // console.log(curso1, curso2)


    // creacion de estudiantes:
    // let estudiante=await estudiantesModelo.create({
    //     nombre: 'Marina', apellido: 'Lopez', email: 'mlopez@test.com',
    //     cursando: [{curso:'650a345e0d59ae24bff461e1'},{curso:'650a345f0d59ae24bff461e3'}]
    // })

    // console.log(estudiante)

    // let estudiante=await estudiantesModelo.findOne({_id:'650a36b38fa6ae32547a9ce7'})
    //                                 .populate('cursando.curso')

    let estudiante=await estudiantesModelo.findOne({_id:'650a36b38fa6ae32547a9ce7'})
                                        .populate({
                                            path:'cursando.curso',
                                        })


    console.log(JSON.stringify(estudiante, null, 3))

} catch (error) {
    console.log(error.message)
}


process.exit() // finaliza el script
