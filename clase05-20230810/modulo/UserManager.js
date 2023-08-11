const fs=require('fs')
const crypto=require('crypto')

class UserManager{
    constructor(path){
        this.path=path
    }

    async getUsers(){
        if(fs.existsSync(this.path)){
            return JSON.parse(await fs.promises.readFile(this.path, 'utf-8'))
        }else return []
    }

    async addUser(nombre, apellido, email, password){
        let usuarios=await this.getUsers()

        if(usuarios.length>0){
            let existe=usuarios.findIndex(usuario=>usuario.email===email)
            if(existe!==-1){
                console.log(`El usuario con email ${email} ya esta dado de alta...!!!`)
                return 
            }
        }

        // let clave='Coder'
        let clave=crypto.randomBytes(16).toString('hex')

        let nuevoUsuario={
            nombre, apellido, email, clave,
            password:crypto.createHmac('sha256',clave).update(password).digest('hex')
        }

        if(usuarios.length===0){
            nuevoUsuario.id=1
        }else{
            nuevoUsuario.id=usuarios[usuarios.length-1].id + 1
        }

        usuarios.push(nuevoUsuario)
        await fs.promises.writeFile(this.path,JSON.stringify(usuarios,null,5))   

    }

    async login(email, password){
        let usuarios=await this.getUsers()

        let usuario=usuarios.find(usuario=>usuario.email===email)
        if(!usuario){
            console.log(`El usuario con email ${email} no existe...!!!`)
            return 
        }

        let passwordGenerada=crypto.createHmac('sha256',usuario.clave).update(password).digest('hex')

        if(passwordGenerada===usuario.password){
            console.log(`Usuario ${usuario.nombre} ${usuario.apellido} logueado...!!!`)
        }else{
            console.log('Credenciales incorrectas')
        }

    }
}


module.exports=UserManager