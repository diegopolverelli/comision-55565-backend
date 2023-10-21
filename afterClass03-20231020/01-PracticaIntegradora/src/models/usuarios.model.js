import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2'

const usuarioEsquema=new mongoose.Schema({
    nombre: String,
    email:{
        type: String, unique:true
    },
    password: String, 
    rol: {
        type: String, default: 'usuario'
    }
},{
   timestamps:true 
})

usuarioEsquema.plugin(mongoosePaginate)

export const usuariosModelo=mongoose.model('usuarios', usuarioEsquema )