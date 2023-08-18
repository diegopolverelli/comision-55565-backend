export default class Persona{
    constructor(nombre, apellido){
        this.nombre=nombre,
        this.apellido=apellido
    }

    get nombreCompleto(){
        return `${this.nombre} ${this.apellido}`
    }

    saludo(){
        return `${this.nombre} ${this.apellido} dice: Hola. ¿cómo están?`
    }
}

export const usuarios=[
    {
        id:1,
        nombre:'Raul'
    },
    {
        id:2,
        nombre:'Vanesa'
    },
    {
        id:3,
        nombre:'Carlos'
    },
]

const f1=(a,b)=>{
    return a+b;
}

const f2=(a,b)=>{
    return a-b;
}

export {
    f1,
    f2, 
    // Persona as default
}

