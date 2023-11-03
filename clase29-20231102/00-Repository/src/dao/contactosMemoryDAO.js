
export default class ContactosMemoryDAO{
    constructor(){
        this.contactos=[]
    }

    get(){
        return this.contactos
    }

    create(contacto){

        let existe=this.contactos.find(c=>c.email===contacto.email)
        if(existe){
            throw new Error("No se pueden insertar contactos con email duplicado: "+contacto.email)
        }

        let id=1
        if(this.contactos.length>0){
            id=this.contactos[this.contactos.length-1].id+1
        }

        let nuevoContacto={id, ...contacto}
        this.contactos.push(nuevoContacto)

        return nuevoContacto

    }

}