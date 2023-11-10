import suma from "./suma.js";
import colors from 'colors'

let tests=0
let testsOK=0
let esperado
let resultado

console.time("Tiempo de ejecución de la prueba:")
tests++
console.log(`Test ${tests}: si se reciben 2 arg numericos, la fn debe devolver la suma de ambos`)
resultado=suma(5,5)
esperado=10
if(resultado===esperado){
    console.log(`Test ${tests} correcto...!!!`.green)
    testsOK++
}else{
    console.log(`Test ${tests} incorrecto`.red)
}

tests++
console.log(`Test ${tests}: si recibo algún arg. no numérico, debe retornar null`)
resultado=suma(5,"5")
esperado=null
if(resultado===esperado){
    console.log(`Test ${tests} correcto...!!!`.green)
    testsOK++
}else{
    console.log(`Test ${tests} incorrecto`.red)
}

tests++
console.log(`Test ${tests}: si no recibe args, debe retornar 0`)
resultado=suma()
esperado=0
if(resultado===esperado){
    console.log(`Test ${tests} correcto...!!!`.green)
    testsOK++
}else{
    console.log(`Test ${tests} incorrecto`.red)
}

tests++
console.log(`Test ${tests}: si recibo n args, numéricos, la fn debe retornar la suma de todos los args`)
resultado=suma(10,10,10,10)
esperado=40
if(resultado===esperado){
    console.log(`Test ${tests} correcto...!!!`.green)
    testsOK++
}else{
    console.log(`Test ${tests} incorrecto`.red)
}

console.log('***********')
console.log(`Pruebas realizadas: ${tests}.`+` Pruebas válidas: ${testsOK}`.green+`. Pruebas incorrectas: ${tests-testsOK}`.red)
console.timeEnd("Tiempo de ejecución de la prueba:")
console.log('***********')
console.log('\x1b[34m\x1b[1mTest Finalizados\x1b[0m');
