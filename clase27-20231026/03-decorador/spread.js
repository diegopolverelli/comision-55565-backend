let numeros=[1,2,3,4]
let numeros2=[6,7,8,9]

let numeros1y2=[...numeros, ...numeros2]
console.log(numeros1y2)

let defensa={
    el2:"Romero", 
    el4:"Acuña"
}

let medio={
    el5:"Paredes", 
    el8:"Perez"
}

let ataque={
    el10:"Lio", 
    el9:"Martinez"
}

let equipo={
    el1:"Martinez",
    // el2:defensa.el2,
    // el4:defensa.el4
    ...defensa,
    ...medio,
    ...ataque,
    el5:"McAllister"
}

console.log(equipo)

let ataque2=ataque
ataque2.el10="Alvarez"

console.table({ataque, ataque2})

let ataque3={...ataque}
ataque3.el10="Martinez"
console.table({ataque, ataque3})

const sumaVarios=(...parametros)=>{ //rest
    console.log(parametros)
    let resultado=0
    parametros.forEach(n=>{
        resultado+=n
    })
    return resultado
}

let sumandos=[20,20,20,20,20]
console.log(sumaVarios(1,3))
console.log(sumaVarios(10,10,10))
console.log(sumaVarios(10,10,10,10,10))
console.log(sumaVarios())
console.log(sumaVarios(...sumandos)) // acá los ... son el spread
