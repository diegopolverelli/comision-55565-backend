import { negociosModelo } from "./models/negocios.model.js";

export class NegociosMongoDao{
    async get(){
        return await negociosModelo.find()
    }

    async getById(){
        return await negociosModelo.find()
    }

}