
const dividir=(dividendo, divisor)=>{
    return new Promise((resolve, reject)=>{

        if(divisor===0){
            reject(`No se puede dividir por 0`)
        }

        resolve(dividendo/divisor)

    })
}

console.log(dividir(10,5))

dividir(10,5)
    .then(resultado=>console.log(resultado))
    .catch(error=>console.log(error))

dividir(10,0)
    .then(resultado=>console.log(resultado))
    .catch(error=>console.log(error))

dividir(30,5)
    .then(resultado=>{
        console.log('salio por el then...')
        console.log(resultado)
    })
    .catch(error=>console.log(error))

console.log('chaucito...!!!')