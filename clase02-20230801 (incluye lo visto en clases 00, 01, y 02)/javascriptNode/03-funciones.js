
function suma(a, b){
    let resultado=0;
    resultado=a+b;
    return resultado
}

console.log(suma(3,4))

const suma1=function(a, b){
    return a+b
}

function calculo(a, b, operacion ){
    return operacion(a, b)
}

console.log(calculo( 7, 8, suma))

console.log(calculo( 7, 8, function(a,b){
    return a+b
}))

// const sumaFlecha=(a, b)=>{
//     return a + b
// }

const sumaFlecha=(a,b)=> a + b

console.log(sumaFlecha(5,5))

const duplicar=a=> 2*a
    

console.log(duplicar(33))


