import mongoose from 'mongoose';



const heroesEsquema = new mongoose.Schema({
    id: {
        type: Number
    },
    name: String,
    alias: String, 
    powers: {
        type: [String]
    }, 
    team: String,
    publisher: String,
    enemies:{
        type: [
            {
                name: String,
                powers: {
                    type: [
                        String
                    ]
                }
            }
        ]
    }

}, { collection: 'heroes' })

heroesEsquema.index({'enemies.name':1})
heroesEsquema.index({'enemies.powers':1})

export const heroesModelo = mongoose.model('heroes', heroesEsquema)

const conectar = async () => {
    try {
        await mongoose.connect('mongodb+srv://coderhouse:coderhouse@cluster0.5rl5n6j.mongodb.net/?retryWrites=true&w=majority&dbName=clase17')
        console.log(`Conexión a DB establecida`)

        let heroe=await heroesModelo.find({'enemies.name':'Ajax'})
        console.log(JSON.stringify(heroe,null, 3))

        let resultado=await heroesModelo.find({'enemies.name':'Ajax'}).explain('excutionStats')
        console.log(JSON.stringify(resultado,null, 3))

        process.exit()

    } catch (err) {
        console.log(`Error al conectarse con el servidor de BD: ${err.message}`)
    }
}

conectar();


