import { usuarioModelo } from "./models/usuario.model.js";

export class UsuariosMySqlDao{

    static getUsuarios(){
        // return usuarioModelo.findAll({where:{email:"diego@test.com"}})
        return usuarioModelo.findAll()
    }

    static createUsuario(usuario){
        return usuarioModelo.create(usuario)
    }

    static getUsuarioByEmail(email){
        // return usuarioModelo.findAll({where:{email:"diego@test.com"}})
        return usuarioModelo.findOne({where:{email}})
    }

    static getUsuarioById(id){
        // return usuarioModelo.findAll({where:{email:"diego@test.com"}})
        return usuarioModelo.findOne({where:{id}})
    }

}