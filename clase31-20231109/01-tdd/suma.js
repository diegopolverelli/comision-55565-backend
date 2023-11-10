// const suma=(a, b)=>{

//     if(!a || !b) return 0
//     if(typeof a!=='number' || typeof b!=='number') return null
//     return a+b
// }

// const suma = (...numeros) => {
//     if (numeros.length === 0) return 0
//     let error = false
//     for (let i = 0; i < numeros.length; i++) {
//         if (typeof numeros[i] !== 'number') {
//             error = true
//             break
//         }
//     }
//     if (error) return null

//     let resultado = 0
//     for (let i = 0; i < numeros.length; i++) {
//         resultado+=numeros[i]
//     }

//     return resultado
// }

// const suma = (...numeros) => {
//     if (numeros.length === 0) return 0
//     let error = false
//     let resultado = 0

//     for (let i = 0; i < numeros.length; i++) {
//         if (typeof numeros[i] !== 'number') {
//             error = true
//             break
//         }else{
//             resultado+=numeros[i]
//         }

//     }
//     if (error) return null

//     return resultado
// }

const suma = (...numeros) => {
    if (numeros.length === 0) return 0
    if (!numeros.every(numero=>typeof numero==='number')) return null
    return numeros.reduce((acum, numero)=>acum+numero,0)
}


export default suma