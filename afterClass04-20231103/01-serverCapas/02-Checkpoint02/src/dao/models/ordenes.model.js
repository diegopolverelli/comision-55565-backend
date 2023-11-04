import mongoose from "mongoose";

const ordenesColeccion='ordenes'
const ordenesEsquema=new mongoose.Schema({
    numeroOrden:Number,
    usuario:{
        type:mongoose.Types.ObjectId,
        ref: 'usuarios'
    },
    negocio:{
        type:mongoose.Types.ObjectId,
        ref: 'negocios'
    },
    items:[],
    estado: Boolean, 
    total:Number
},{
    timestamps:{
        createdAt:"fecha de alta",
        updatedAt:"fecha de modificacion"
    }
})

export const ordenesModelo=mongoose.model(ordenesColeccion, ordenesEsquema)