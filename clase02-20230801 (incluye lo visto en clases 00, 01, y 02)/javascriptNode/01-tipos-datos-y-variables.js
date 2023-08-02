let cadena='hola, como estan???'
let numero1=9990
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)
let nroGrande=Number.MAX_SAFE_INTEGER;
console.log(nroGrande+9)
console.log(nroGrande+10)
console.log(nroGrande+8)
console.log(nroGrande+7)
console.log(nroGrande+12)

let nroGrande2=100n
console.log(typeof cadena)
console.log(typeof nroGrande)
console.log(typeof nroGrande2)

let nroGrande3=200n


console.log(nroGrande3+nroGrande2)

let verdaderoFalso=true
console.log(typeof verdaderoFalso)

let prueba;
console.log(prueba)

let arreglo=[1,2,'a', 'b', true]

console.log(cadena.length)
console.log(cadena.toLocaleUpperCase())

let objeto1={
    nombre:'Diego', 
    apellido: 'Polverelli'
}
console.log(objeto1)
objeto1.edad=45;
console.log(objeto1)
objeto1.saludo=()=>console.log('Hola...!!!')
console.log(objeto1)
objeto1.saludo()

console.log(cadena)
cadena.edad=12;
cadena.saludo=()=>console.log('Hola...!!!')
console.log(cadena)
console.log(cadena.edad)
// cadena.saludo()

let prueba2='hola...'
console.log(prueba2)
prueba2=44
console.log(prueba2)

console.log(arreglo)
// arreglo=8
// console.log(arreglo)
arreglo[2]='elemento modificado'
console.log(arreglo)

let edad=33;
console.log(edad)
edad++;
edad=edad+1;
edad += 1;
console.log(edad)