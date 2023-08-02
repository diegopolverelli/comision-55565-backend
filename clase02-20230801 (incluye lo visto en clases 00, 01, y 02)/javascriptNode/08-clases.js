
class Persona{

    static especie='humano'
    static #codigo='123'

    constructor(nombre, email){
        this.nombre=nombre
        this.email=email
        this.rol='user'
    }

    static cambiaCodigo(nuevoCodigo){
        Persona.#codigo=nuevoCodigo
    }

    static muestraCodigo(){
        console.log(Persona.#codigo)
        return Persona.#codigo
    }

    static cambiaEspecie(nuevaEspecie){
        Persona.especie=nuevaEspecie
    }

    static muestraEspecie(){
        console.log(Persona.especie)
    }


    cambiarRol(nuevoRol){
        this.rol=nuevoRol
    }

    mostrarDatos(){
        return this.nombre
    }

    saludo(){
        console.log(`Hola...!!! me llamo ${this.nombre}`)
    }
}

let persona1=new Persona('Juan','juan@test.com')
persona1.saludo()
console.log(persona1.email)
console.log(persona1.rol)
persona1.cambiarRol('admin')
console.log(persona1.rol)

let persona2=new Persona('Jimena','jime@test.com')
persona2.saludo()
console.log(Persona.especie)
// Persona.especie='ser humano'
Persona.cambiaEspecie('ser humano')
// console.log(Persona.especie)
Persona.muestraEspecie()

console.log(Persona.muestraCodigo())
Persona.cambiaCodigo('456')
console.log(Persona.muestraCodigo())
