import mongoose from "mongoose";
import { usuariosModelo } from "./models/usuarios.model.js";

export class UsuariosMongoDao{
    async get(){
        return await usuariosModelo.find()
    }

    async getById(id){
        if(!mongoose.Types.ObjectId.isValid(id)){
            throw new Error("Id de Mongo inválido")
        }
        return await usuariosModelo.find()
    }

    async create(usuario){
        return await usuariosModelo.create(usuario)
    }

    async update(id, usuario){
        if(!mongoose.Types.ObjectId.isValid(id)){
            throw new Error("Id de Mongo inválido")
        }
        return await usuariosModelo.create(id, usuario)
    }

}