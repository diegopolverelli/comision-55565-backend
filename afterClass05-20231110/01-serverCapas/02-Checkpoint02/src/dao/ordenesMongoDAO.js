import mongoose from "mongoose";
import { ordenesModelo } from "./models/ordenes.model.js";

export class OrdenesMongoDao{
    async get(){
        return await ordenesModelo.find()
    }

    async getById(id){
        if(!mongoose.Types.ObjectId.isValid(id)){
            throw new Error("Id de Mongo inválido")
        }
        return await ordenesModelo.find()
    }

    async create(orden){
        return await ordenesModelo.create(orden)
    }

    async update(id, orden){
        if(!mongoose.Types.ObjectId.isValid(id)){
            throw new Error("Id de Mongo inválido")
        }
        return await ordenesModelo.create(id, orden)
    }

}