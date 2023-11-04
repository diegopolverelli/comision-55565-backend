import mongoose from 'mongoose'

const negociosColeccion="negocios"
const negociosEsquema=new mongoose.Schema({
    nombre:String,
    productos:[]
},{
    timestamps:{
        createdAt:"fecha de alta",
        updatedAt:"fecha de modificacion"
    }
})

export const negociosModelo=mongoose.model(negociosColeccion, negociosEsquema)