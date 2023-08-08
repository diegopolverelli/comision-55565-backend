let valorPrueba=104
// console.log(Boolean(104))
// console.log(Boolean('Juan Carlos'))
// console.log(Boolean(false))
// console.log(Boolean(0))
// console.log(Boolean(''))
// console.log(Boolean(-1))
// console.log(Boolean([]))
// console.log(Boolean(null))
// console.log(Boolean(undefined))

// if(a>10 || b>20 || c>14 || d<20) {}  

// let valor=valorPrueba||'sin valor' // el operador || corresponde al OR lógico
let valor=valorPrueba??'sin valor'
console.log(valor)


class Persona{
    #password
    constructor(nombre, apellido, password){
        this.nombre=nombre
        this.apellido=apellido
        this.#password=password
    }

    verPassword(){
        console.log(this.#password)
    }

}

let persona=new Persona('Diego','Peretti','123456')
persona.verPassword()