const suma=(a,b)=>{
    return new Promise((res,rej)=>{
        if(a===0) rej('error...')
        res(a+b)
    })
}

// suma(0,9).then(resultado=>console.log(resultado))
//     .catch(e=>console.log(e))
//     .finally(()=>{
//         console.log('Estoy realizando tareas de cierre de archivos, conn. db, etc.')
//     })



let defensa={
    primerCentral:'Cuty',
    lateralIzquierdo:'Montiel',
    lateralDerecho:'Tagliafico',
    segundoCentral:'Otamendi'
}

let medio={
    nro5:'Paredes',
    nro8:'DePaul',
    nro7:'DiMaria',
    nro14:'Enzo'
}

let ataque={
    el10:'Lio',
    el9:'Julian',
    lateralDerecho:'Acuña',
}

let equipo={
    arquero:'Dibu',
    // primerCentral:defensa.primerCentral,
    // nro5:medio.nro5
    ...defensa,   // ... son operador spread
    ...medio,    // ... son operador spread
    ...ataque    // ... son operador spread
}

console.log(equipo)

// let arquero=equipo.arquero
// let primerCentral=equipo.primerCentral
// let el10=equipo.el10
// let el9=equipo.el9
// console.log(arquero, primerCentral, el9, el10)

// let {arquero, primerCentral, el9, el10}=equipo
// console.log(arquero, primerCentral, el9, el10)

let {el10, nro14, ...diezMas}=equipo  // ... son operador rest
console.log(el10, nro14, diezMas)
// let {el10:el10_2, nro14, ...diezMas}=equipo

// let {arquero:arquero1, primerCentral:central, el9:nro9, el10:nro10}=equipo
// console.log(arquero1, central, nro9, nro10)

const function1=()=>{
    let pi=3.14
    function fInterna(){
        console.log('hola')
    }
    return {
        pi,
        fInterna
    }
}

// let {fInterna:miFuncion}=function1()

// miFuncion()

// let array=[1,2,3,4,5]
// let [valor1,valor2,,,valor3]=array
// console.log(valor1, valor2, valor3)
// console.log(valor3)
// console.log(valor3+valor1)



// function sumar(a,b,c,d){
//     return a+b+c+d
// }
// // sumar varios???
// console.log(sumar(5,6,10,10))
// console.log(sumar(5,6))

function sumarVarios(...loOtro){  // ... son operador rest
    let resultado=0
    loOtro.forEach(numero=>resultado+=numero)
    return resultado
}
console.log(sumarVarios(1,2,3,4,5,6))
console.log(sumarVarios())
console.log(sumarVarios(5,6))

let sumandos=[1,2,3,4,5,6]
console.log(sumarVarios(...sumandos)) // ... son operador spread
