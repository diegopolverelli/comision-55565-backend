let alumno01={
    nombre:'Jimena',
    apellido:'Martinez',
    fechaNacimiento:new Date(1990,2,4),
    email: 'jmartinez@test.com',
    domicilio:'Las Bases 1974, Haedo'
}

console.log(Object.entries(alumno01))
console.log(Object.keys(alumno01))
console.log(Object.values(alumno01))



let factura={
    numero:107998,
    codigoCliente:'A005',
    fecha: new Date(2023,0,10),
    idTributario:'30333333331',
    subtotal:10000,
    impuestos:{
        tasasGenerales:1.2,
        iibb:2.4,
        iva:21,
        otros:0.5
    }
}

let subtotal=factura.subtotal
let tasasImpuestos=Object.values(factura.impuestos)
console.log(tasasImpuestos)

let impuestos=0
for(let i=0;i<tasasImpuestos.length;i++){
    impuestos=impuestos+subtotal*tasasImpuestos[i]/100
}

let total=subtotal+impuestos
console.log(total)

//reduce
total=tasasImpuestos.reduce((acum,impuesto)=>acum+subtotal*impuesto/100,subtotal)
console.log(total)

total=tasasImpuestos.reduce((acum,impuesto,indice)=>{
    console.log(`${indice+1}) recorriendo el índice ${indice}. Valor acumulador=${acum},
valor impuesto calculado=${subtotal*impuesto/100}`)
    return acum+subtotal*impuesto/100
},subtotal)
console.log(total)