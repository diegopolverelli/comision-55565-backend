const f1=()=>{
    console.log('Ejecutando f1...')
}

const f2=()=>{
    console.log('Inicia f2')
    for(let i=0;i<10_000_000;i++){
        let arreglo1=[4,3,1,7,90]
        arreglo1.sort()
    }
    console.log('Finaliza f2')
}

// operaciones síncronas
// console.log('Operaciones síncronas:')
// console.log('inicio programa')

// f1()
// f2()

// console.log('fin de programa')



// operaciones asíncronas
console.log('Operaciones asíncronas:')
console.log('inicio programa')

setTimeout(()=>{
    console.log('impresion a 2 seg')
},2000)

setTimeout(()=>{
    console.log('impresion a 0 seg')
},0)

let contador1=0
let i1=setInterval(()=>{
    contador1++
    console.log('contador 1',contador1)
    if(contador1>5){
        clearInterval(i1)
    }
},1000)

let contador2=0
let i2=setInterval(()=>{
    contador2++
    console.log('contador 2',contador2)

    if(contador2>10){
        clearInterval(i2)
    }

},500)
console.log('fin de programa')
