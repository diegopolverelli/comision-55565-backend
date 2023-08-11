const fs=require('fs')

class UserManager{
    constructor(path){
        this.path=path
    }

    async getUsers(){
        if(fs.existsSync(this.path)){
            return JSON.parse(await fs.promises.readFile(this.path, 'utf-8'))
        }else return []
    }

    async addUser(nombre, apellido, email){
        let usuarios=await this.getUsers()

        if(usuarios.length>0){
            let existe=usuarios.findIndex(usuario=>usuario.email===email)
            if(existe!==-1){
                console.log(`El usuario con email ${email} ya esta dado de alta...!!!`)
                return 
            }
        }

        let nuevoUsuario={
            nombre, apellido, email
        }

        if(usuarios.length===0){
            nuevoUsuario.id=1
        }else{
            nuevoUsuario.id=usuarios[usuarios.length-1].id + 1
        }

        usuarios.push(nuevoUsuario)
        await fs.promises.writeFile(this.path,JSON.stringify(usuarios,null,5))   
    }

}

const entorno=async()=>{
    let path='./archivos/usuarios.json'
    let userManager=new UserManager(path)

    await userManager.addUser('Gabriel', 'Medina', 'gabymedina@hotmail.com')
    await userManager.addUser('Mario', 'Santos', 'disculpefuegotiene@hotmail.com')


    console.log(await userManager.getUsers())
}

entorno()