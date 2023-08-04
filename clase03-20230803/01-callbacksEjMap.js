
function suma(a, b, callback){
    let resultado=a+b
    callback(resultado)
}

suma(4,5, function(valor){
    console.log(valor)
})

suma(4,5, (x)=>{
    console.log(x)
})

suma(4,5, x=>console.log(x))

const imprime=(valor)=>{
    console.log(valor)
}

suma(4,5,imprime)

let array=[1,2,3,4,5]
let nuevoArray=array.map(numero=>2*numero)

console.log(array)
console.log(nuevoArray)
console.table({array, nuevoArray})

nuevoArray=array.map(numero=>`soy el nro. ${numero}`)
console.table({array, nuevoArray})

nuevoArray=array.map(numero=>{
    let resultado=`soy el nro. ${numero}...`
    //...
    return resultado
} )
console.table({array, nuevoArray})


//metodo map propio:

function miMap(array=[], callback){

    let arraySalida=[]

    for(let i=0; i<array.length; i++){
        let resultado=callback(array[i])
        arraySalida.push(resultado)        
    }

    return arraySalida

}

nuevoArray=miMap(array, numero=>2*numero)
console.table({array, nuevoArray})