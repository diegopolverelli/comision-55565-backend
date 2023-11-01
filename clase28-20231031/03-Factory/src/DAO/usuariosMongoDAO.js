import mongoose from "mongoose";
import { usuariosModelo } from "./model/usuarios.model.js";

try {
    await mongoose.connect('mongodb+srv://coderhouse:coderhouse@cluster0.5rl5n6j.mongodb.net/?retryWrites=true&w=majority&dbName=clase26')
    console.log("MongoDB Online")
} catch (error) {
    console.log(error.message)
}

export class UsuariosMongoDAO{
    constructor(){

    }

    async get(filtro={}){
        if(filtro["_id"]){
            if(!mongoose.Types.ObjectId.isValid(filtro["_id"])){
                throw new Error('Id de usuario inválido')
            }
        }
        return await usuariosModelo.find(filtro)
    }

    async create(usuario){
        return await usuariosModelo.create(usuario)
    }

}