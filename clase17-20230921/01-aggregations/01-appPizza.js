import mongoose from 'mongoose';

const ventasCol = 'ventas'

const ventasEsquema = new mongoose.Schema({
    name: String,
    size: {
        type: String,
        enum: ["small", "medium", "large"],
        default: "medium"
    },
    price: Number,
    quantity: Number,
    date: Date,
})

const ventasModelo = mongoose.model(ventasCol, ventasEsquema);

const env = async () => {
    try {
        await mongoose.connect('mongodb+srv://coderhouse:coderhouse@cluster0.5rl5n6j.mongodb.net/?retryWrites=true&w=majority&dbName=clase17')
        console.log(`Conexión a DB establecida`);

        // Resolución ejercicio:
        // let resultado=await ventasModelo.find()
        // console.log(resultado)

        let resultado = await ventasModelo.aggregate(
            [
                // {
                //     $match: { size: { $in: ["medium"] } }
                // },
                {
                    $group:{
                        _id: "$name",
                        totalQuantity: {$sum: "$quantity"}
                    }
                },
                {
                    $sort:{totalQuantity:-1}
                },
                {
                    $project:{
                        _id:0,
                        totalQuantity:1,
                        info:'Prueba',
                        sabor:"$_id"
                    }
                },
                {
                    $group:{
                        _id: 'todos',
                        detalle: {$push: "$$ROOT"}
                    }
                },
                {
                    $project:{
                        _id:0, detalle:1, 
                        titulo: 'Reporte octubre',
                        elaboradoPor:'Alumnos...'
                    }
                },
                {
                    $merge:{
                        into: 'reportes'
                    }
                }
            ]
        )

        console.log(JSON.stringify(resultado,null,5))

        process.exit()

    } catch (error) {
        console.log(`Error en la app: ${error.message}`);
        process.exit()

    }
}

env()
