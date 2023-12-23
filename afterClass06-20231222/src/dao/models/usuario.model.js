import {DataTypes} from 'sequelize'
import { sequelize } from '../../conn.js'

export const usuarioModelo=sequelize.define("usuarios",{
    nombre:{
        type: DataTypes.STRING, allowNull: false
    },
    email:{
        type: DataTypes.STRING, allowNull: false, 
        unique: true
    }
}, {})

sequelize.sync()
    .then(()=>{
        console.log("Sincronizacion OK...!!!")
    })
    .catch((error)=>{
        console.log(error.message)
    })
