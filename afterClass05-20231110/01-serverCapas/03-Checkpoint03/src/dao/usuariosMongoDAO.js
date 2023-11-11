import mongoose from "mongoose";
import { usuariosModelo } from "./models/usuarios.model.js";

export class UsuariosMongoDao{
    async get(filtro={}){
        console.log(filtro)
        return await usuariosModelo.find(filtro)
    }

    async getById(id){
        if(!mongoose.Types.ObjectId.isValid(id)){
            throw new Error("Id de Mongo inválido")
        }
        return await usuariosModelo.findOne({_id:id})
    }

    async getBy(filtro={}){

        return await usuariosModelo.findOne(filtro)
    }

    async create(usuario){
        console.log(usuario)
        return await usuariosModelo.create(usuario)
    }

    async update(id, usuario){
        if(!mongoose.Types.ObjectId.isValid(id)){
            throw new Error("Id de Mongo inválido")
        }
        return await usuariosModelo.updateOne({_id:id}, usuario)
    }

}