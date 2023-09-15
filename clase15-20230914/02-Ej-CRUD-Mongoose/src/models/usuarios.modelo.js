// import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const usuariosColl='usuarios'
const usuariosEsquema=new Schema({
    nombre:String,
    apellido:String
}, {strict: true})

export const usuariosModelo=model(usuariosColl, usuariosEsquema)



