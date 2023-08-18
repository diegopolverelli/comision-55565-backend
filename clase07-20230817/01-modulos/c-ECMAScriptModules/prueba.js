import Persona from './modulo.js'
import {f1, f2 as resta, usuarios} from './modulo.js'
import * as funciones from './modulo.js'

import fs from 'fs'
import path from 'path'
import __dirname from './utils.js'


let persona=new Persona('Pedro','Ramirez')
console.log(persona.saludo())

console.log(resta(100,20))
console.log(f1(10,10))

console.log(funciones.usuarios)
console.log(funciones.f1(5,5))

let persona1=new funciones.default('Martina','Gonzalez')
console.log(persona1.saludo())


console.log(__dirname)
let ruta=path.join(__dirname, 'archivos', 'miArchivo.txt') //rutas absolutas

// console.log('Valor variable ruta (c/join): ',ruta)
fs.writeFileSync(ruta,'Hola...!!!, ahora con import y export')
