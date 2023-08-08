let texto=`     

     Curso: Programación Backend
     
     Dias de cursada: Martes y Jueves    
                                `


console.log(`***${texto}***`)
console.log(`***${texto.trim()}***`)

let arrayAnidado=[1,2,3,[4,5,6],7,8,[9],10,11,12]
// console.log(arrayAnidado.length)
// console.log(arrayAnidado)
// console.log(arrayAnidado.flat())
// console.log(arrayAnidado.flat().length)


arrayAnidado=[1,2,3,[4,5,6],7,8,[9,[10,11,12],13,14,[15,[16,17,18]]],19,20]
console.log(arrayAnidado.flat(3))
console.log(arrayAnidado.flat(3).length)
