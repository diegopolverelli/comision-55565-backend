"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre, this.apellido = apellido;
    }
    imprimeNombre() {
        console.log(this.nombre, this.apellido);
    }
}
exports.Persona = Persona;
