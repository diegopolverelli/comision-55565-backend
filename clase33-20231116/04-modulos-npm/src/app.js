export const suma=(...numeros)=>{
    return numeros.reduce((a,n)=>{
        if(typeof n!=="number"){
            console.log(`El argumento ${n} no es de tipo numérico, sino ${typeof n}, y no será tenido en cuenta para el cálculo`)
            return a
        }else{
            return a+n
        }
    })
}

// console.log(suma(1,2,3,4,5))
// console.log(suma(1,2,"3",4,5))

export const resta=(a,b)=>a-b
export const multiplicacion=(a,b)=>a*b
export const division=(a,b)=>{
    if(b===0){
        throw Error(`No se puede dividir por 0...!!!`)
    }else{
        return a/b
    }
}

