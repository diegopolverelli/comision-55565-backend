import mongoose from "mongoose"
import { DtoUsuarios } from "./dtoUsuarios.js"

const usuariosModelo=mongoose.model("usuarios",new mongoose.Schema({
    nombre:String, email:{type:String, unique:true}
}))

// 'mongodb+srv://coderhouse:coderhouse@cluster0.5rl5n6j.mongodb.net/?retryWrites=true&w=majority&dbName=clase26'

class MongoSingleton{
    static #instancia

    constructor(url){
        mongoose.connect(url)
    }

    static conectarDB(url){
        if(this.#instancia){
            console.log("Conexion a DB establecida previamente")
            return this.#instancia
        }

        this.#instancia=new MongoSingleton(url)
        console.log("Conexion a DB establecida")  
        return this.#instancia
    }
}

const conn01=MongoSingleton.conectarDB('mongodb+srv://coderhouse:coderhouse@cluster0.5rl5n6j.mongodb.net/?retryWrites=true&w=majority&dbName=clase26')
const conn02=MongoSingleton.conectarDB('mongodb+srv://coderhouse:coderhouse@cluster0.5rl5n6j.mongodb.net/?retryWrites=true&w=majority&dbName=clase26')
const conn03=MongoSingleton.conectarDB('mongodb+srv://coderhouse:coderhouse@cluster0.5rl5n6j.mongodb.net/?retryWrites=true&w=majority&dbName=clase26')

let usuarios=await usuariosModelo.find()
usuarios=usuarios.map(usuario=>new DtoUsuarios(usuario))
console.log(usuarios)