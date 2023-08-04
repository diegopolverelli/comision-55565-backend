
const sumar=(a, b)=>{
    return new Promise((resolve, reject)=>{

        resolve(a+b)

    })
}

sumar(2,2).then(result=>console.log(result))

// 5 x 5
sumar(5,5)
    .then(res1=>{
        sumar(res1,5)
            .then(res2=>{
                sumar(res2,5)
                    .then(res3=>{
                        sumar(res3,5)
                            .then(resFinal=>{
                                console.log(resFinal)
                            })
                    })
            })
    })


sumar(5,5)
    .then(res1=>{
        return sumar(res1,5)
    })
    .then(res2=>{
        return sumar(res2,5)
    })
    .then(res3=>{
        // throw new Error('algo pasó...')
        return sumar(res3,5)
    })
    .then(resFinal=>{
        console.log(resFinal)
        return 'algo'
    })
    .then(res=>console.log(res))
    .catch(error=>console.log(error))

console.log('el programa sigue...')
console.log('el programa termina')
