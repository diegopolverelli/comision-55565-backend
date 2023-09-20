import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2'

const usuariosEsquema=new mongoose.Schema({
    first_name: String, last_name: String, gender: String, 
    email: String, code: Number
},{
    collection: 'bigUsers'
})

usuariosEsquema.plugin(mongoosePaginate)

export const usuariosModelo=mongoose.model('usuarios',usuariosEsquema)