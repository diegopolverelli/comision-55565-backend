// const Persona=require('./modulo')

// let persona=new Persona('Juan', 'Perez')
// console.log(persona.saludo())

const suma=require('./modulo').f1
const modulo=require('./modulo')

const fs=require('fs')
const path=require('path')

console.log(suma(9,9))
console.log(modulo.usuarios)

let persona1=new modulo.Persona('Matias','Jimenez')
console.log(persona1.saludo())


let ruta='./archivos/miArchivo.txt'  // ruta relativa

console.log('Valor variable __dirname:', __dirname)

ruta=__dirname+'/archivos/miArchivo2.txt'
console.log('Valor variable ruta: ',ruta)

ruta=path.join(__dirname, 'archivos', 'miArchivo3.txt')

console.log('Valor variable ruta (c/join): ',ruta)
// fs.writeFileSync(ruta,'Hola...!!!')
