export class ContactosPostDTO{
    constructor(contacto){
        this.nombre=contacto.first_name.toUpperCase()
        this.apellido=contacto.last_name.toUpperCase()
        this.nombreCompleto=this.nombre+" "+this.apellido
        this.email=contacto.email
        this.tel=contacto.phone_number
        this.rol="USUARIO"
    }
}