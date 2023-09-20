import mongoose from "mongoose";

const docentesModelo=mongoose.model('docentes', new mongoose.Schema({
    nombre: String, apellido: String
}))

const cursosModelo=mongoose.model('cursos', new mongoose.Schema({
    titulo: String, horas: Number, 
    docente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'docentes'
    }
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

    // crear docentes:
    // let profe1=await docentesModelo.create({nombre:'Juan', apellido:'Perez'})
    // let profe2=await docentesModelo.create({nombre:'Carla', apellido:'Ruiz'})

    // console.log(profe1, profe2)

    // crear cursos:
    // let curso1=await cursosModelo.create({
    //     titulo: 'Calculo II', horas:4, docente: profe1._id
    // })

    // let curso2=await cursosModelo.create({
    //     titulo: 'Base de datos', horas:8, docente: profe2._id
    // })

    // console.log(curso1, curso2)


    // creacion de estudiantes:
    // let estudiante=await estudiantesModelo.create({
    //     nombre: 'Diego', apellido: 'Aguirre', email: 'daguirre@test.com',
    //     cursando: [{curso:curso1._id},{curso:curso2._id}]
    // })

    // console.log(estudiante)

    // let estudiante=await estudiantesModelo.findOne({_id:'650a36b38fa6ae32547a9ce7'})
    //                                 .populate('cursando.curso')

    let estudiante=await estudiantesModelo.findOne({_id:'650a3b5b52116b1f9011c83a'})
                                        .populate({
                                            path:'cursando.curso',
                                            populate:{
                                                path: 'docente'
                                            }
                                        })


    console.log(JSON.stringify(estudiante, null, 3))

} catch (error) {
    console.log(error.message)
}


process.exit() // finaliza el script
