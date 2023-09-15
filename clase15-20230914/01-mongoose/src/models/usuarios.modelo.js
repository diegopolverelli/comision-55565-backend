import mongoose from "mongoose";

const usuariosColeccion='usuarios'
const usuariosEsquema=new mongoose.Schema({
    nombre: {
        type: String, require:true
    },
    apellido: String,
    email: {
        type: String,
        unique:true
    }
})

export const usuariosModelo=mongoose.model(usuariosColeccion, usuariosEsquema)