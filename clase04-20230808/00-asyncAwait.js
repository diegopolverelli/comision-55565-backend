const dividir = (dividendo, divisor) => {
    return new Promise((resolve, reject) => {

        if (divisor === 0) {
            reject(`No se puede dividir por 0`)
        }

        resolve(dividendo / divisor)

    })
}

const sumar = (a, b) => {
    return new Promise((resolve, reject) => {
        // throw new Error('error...')
        resolve(a + b)

    })
}

dividir(10, 5)
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error))


// problema: ¿como realizo la operación 10/2 + 30/3?

let resAuxiliar = 0
dividir(10, 2)
    .then(res1 => {
        resAuxiliar = res1
        return dividir(30, 3)
    })
    .then(res2 => {
        return sumar(resAuxiliar, res2)
    })
    .then(resFinal => console.log('con encadenamiento: ', resFinal))

dividir(10, 2)
    .then(res1 => {
        dividir(30, 3)
            .then(res2 => {
                sumar(res1, res2)
                    .then(resFinal => console.log('sin encadenar:',resFinal))
            })
    })


const entorno=async()=>{

    try {
        let res1=await dividir(10,2)
        let res2=await dividir(30,3)
        let resFinal=await sumar(res1, res2)
        console.log('con async/await:',resFinal)
       
    } catch (error) {
        console.log(error)
    }

    return 'hola...!!!'

}

console.log(entorno())

async function entorno2(){
    try {
        let res1=await dividir(10,2)
        let res2=await dividir(30,3)
        let resFinal=await sumar(res1, res2)
        console.log('con async/await (2):',resFinal)
       
    } catch (error) {
        console.log(error)
    }

    return 'hola...!!!'

}

entorno2()
