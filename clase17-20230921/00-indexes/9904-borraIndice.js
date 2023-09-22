import mongoose from "mongoose";

await mongoose.connect('mongodb+srv://coderhouse:coderhouse@cluster0.5rl5n6j.mongodb.net/?retryWrites=true&w=majority&dbName=clase17')
console.log(`Conexión a DB establecida`)

// ELIMINAR TODOS LOS INDICES (nunca se eliminar el que MONGO hace sobre "_id")
let resultado = await mongoose.connection.collection('bigUsers').dropIndexes()
console.log(resultado)

resultado = await mongoose.connection.collection('bigAlumnos').dropIndexes()
console.log(resultado)

resultado = await mongoose.connection.collection('heroes').dropIndexes()
console.log(resultado)

let indices = await mongoose.connection.collection('heroes').listIndexes().toArray()
console.log(indices)

indices = await mongoose.connection.collection('bigAlumnos').listIndexes().toArray()
console.log(indices)

indices = await mongoose.connection.collection('bigAlumnos').listIndexes().toArray()
console.log(indices)

process.exit()