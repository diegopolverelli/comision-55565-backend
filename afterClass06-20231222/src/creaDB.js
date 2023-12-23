import {Sequelize} from 'sequelize'

const sequelize=new Sequelize("", "root", "123", {
    host:"localhost", port:"3306",
    dialect: "mysql", //logging:false, 
})

const nombreDB="basePrueba"

async function crearDB(){
    try {
        await sequelize.query(`CREATE DATABASE IF NOT EXISTS ${nombreDB}`)
        console.log("Base de datos creada...!!!")
    } catch (error) {
        console.log("Error al crear la DB")
    } finally {
        sequelize.close()
    }
}

crearDB()