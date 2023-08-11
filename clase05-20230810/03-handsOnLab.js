const UserManager=require('./modulo/UserManager')

const entorno=async()=>{
    let path='./archivos/usuariosHash.json'
    let userManager=new UserManager(path)

    await userManager.addUser('Gabriel', 'Medina', 'gabymedina@hotmail.com', '123456')
    await userManager.addUser('Mario', 'Santos', 'disculpefuegotiene@hotmail.com', '123456')

    console.log(await userManager.getUsers())
    
    await userManager.login('gabymedina@hotmail.com','78910')
    await userManager.login('gabymedina@hotmail.com','123456')
    
}

entorno()