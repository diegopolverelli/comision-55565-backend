import mongoose from "mongoose";

const usuariosColeccion='usuarios'
const usuariosEsquema=new mongoose.Schema({
    nombre:String, 
    correo: String,
    rol: String,
    pedidos:[{type:mongoose.Types.ObjectId, ref:'ordenes'}]
},{
    timestamps:{
        createdAt:"fecha de alta",
        updatedAt:"fecha de modificacion"
    }
})

export const usuariosModelo=mongoose.model(usuariosColeccion, usuariosEsquema)