import mongoose from "mongoose";
import { ordenesModelo } from "./models/ordenes.model.js";

export class OrdenesMongoDao{
    async get(){
        return await ordenesModelo.find().populate('usuario').populate('negocio').lean()
    }

    async getById(id){
        if(!mongoose.Types.ObjectId.isValid(id)){
            throw new Error("Id de Mongo inválido")
        }
        return await ordenesModelo.findOne({_id:id})
    }

    async create(orden){
        return await ordenesModelo.create(orden)
    }

    async update(id, orden){
        if(!mongoose.Types.ObjectId.isValid(id)){
            throw new Error("Id de Mongo inválido")
        }
        return await ordenesModelo.updateOne({_id:id}, orden)
    }

}