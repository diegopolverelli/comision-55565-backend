import mongoose from 'mongoose'

export const modeloUsuarios=mongoose.model('usuarios', new mongoose.Schema({
    nombre: String,
    email: {
        type: String, unique: true
    },
    password: String
}))