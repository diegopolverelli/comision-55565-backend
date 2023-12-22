export class Persona{
    nombre:string
    apellido:string

    constructor(nombre:string, apellido:string){
        this.nombre=nombre, this.apellido=apellido
    }

    imprimeNombre():void{
        console.log(this.nombre,this.apellido)
    }
}