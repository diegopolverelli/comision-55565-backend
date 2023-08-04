
const sumar=(a,b,callback)=>{
    let resultado=a+b
    callback(resultado)
}

const multiplica=(a,b,callback)=>{
    let resultado=a*b
    callback(resultado)
}

sumar(7,8,x=>console.log(x))

const imprime=(x,callback)=>{
    console.log(x)
    callback()
}

// 7 x 5
sumar(7,7,(res)=>{
    sumar(res,7,(res1)=>{
        sumar(res1,7,(res2)=>{
            sumar(res2,7,(resFinal)=>{
                imprime(resFinal,()=>{
                    console.log('finalizando la operacion...')
                })
            })
        })
    })
})

