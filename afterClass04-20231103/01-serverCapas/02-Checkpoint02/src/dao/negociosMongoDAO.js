import mongoose from "mongoose";
import { negociosModelo } from "./models/negocios.model.js";

export class NegociosMongoDao{
    async get(){
        return await negociosModelo.find()
    }

    async getById(id){
        if(!mongoose.Types.ObjectId.isValid(id)){
            throw new Error("Id de Mongo inválido")
        }
        return await negociosModelo.find()
    }

    async create(negocio){
        return await negociosModelo.create(negocio)
    }

    async update(id, negocio){
        if(!mongoose.Types.ObjectId.isValid(id)){
            throw new Error("Id de Mongo inválido")
        }
        return await negociosModelo.create(id, negocio)
    }

}