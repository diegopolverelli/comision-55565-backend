export class DtoUsuarios{
    constructor(usuario){
        if(usuario.nombre.split(' ').length>1){
            this.first_name=usuario.nombre.split(' ')[0].toUpperCase()
            this.last_name=usuario.nombre.split(' ')[1].toUpperCase()
        }else{
            this.first_name=usuario.nombre.toUpperCase()
            this.last_name=" - "
        }
        this.email=usuario.email
        this.role="USER"
    }
}