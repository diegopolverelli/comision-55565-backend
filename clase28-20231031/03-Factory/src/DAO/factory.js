import { config } from "../config/config.js";
let dao

switch (config.PERSISTENCE) {
    case "FS":
        dao=await import('./usuariosFsDAO.js')    
        dao=dao.usuariosFsDAO
        break;

    case "MONGO":
        dao=await import('./usuariosMongoDAO.js')
        dao=dao.UsuariosMongoDAO
        break;

    default:
        throw new Error("Persistencia invalida")
        // break;
}

export {dao}