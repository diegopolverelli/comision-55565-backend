const sumaVarios=(a, ...parametros)=>{
    console.log(parametros)
}

sumaVarios()
sumaVarios(1,2)
sumaVarios(1,2, true, 'juan', 105)
sumaVarios(1,2,9,10)

const suma=(a,b)=>{
    return a+b
}

console.log(suma(4,5))

const decoradorLog=(funcion)=>{
    return function(...params){ // los "..." son aquí el operador rest

        console.log(`La función ${funcion.name} se ejecuto el ${new Date().toLocaleString()}`)

        let resultado=funcion(...params) // "..." son aquí el operador spread
        return resultado
    }
}

// f1 (1,3,109, 27)  params=[1,3,109, 27]

let funcionDecorada=decoradorLog(suma)
console.log(funcionDecorada(4,6))

// const decoradorDuplica=(funcion)=>{
//     return function(...params){

//         // algo... funcionalidad que quiero agregar

//         let resultado=funcion(...params)

//         return resultado*2
//     }
// }




