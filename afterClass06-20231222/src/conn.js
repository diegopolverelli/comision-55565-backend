import {Sequelize} from 'sequelize'

export const sequelize=new Sequelize("basePrueba", "root", "123", {
    host:"localhost", port:"3306",
    dialect: "mysql", //logging:false, 
})

try {
    sequelize.authenticate()
    console.log("DB Online...!!!")
} catch (error) {
    console.log("ERROR...!!!", error.message)
}