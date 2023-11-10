import {fakerES_MX as faker} from '@faker-js/faker'

// console.log(faker.airline.airport())
// console.log(faker.animal.bird())

const generaPersona=()=>{
    let nombre=faker.person.firstName()
    let apellido=faker.person.lastName()
    let email=faker.internet.email({firstName:nombre, lastName:apellido})
    // let dni2=faker.string.numeric(8)
    let dni=faker.number.int({ min: 9000000, max: 63000000 }).toLocaleString()
    let trabajo=faker.person.jobTitle()
    return {nombre, apellido, email, dni, trabajo}
}

const generaProducto=()=>{
    let codigo=faker.string.alphanumeric({ casing: 'upper', length:6 })
    let descrip=faker.commerce.product()
    let cant=faker.number.int({min:1, max:10})
    let precio=faker.commerce.price({ min: 1000, max: 4500, dec: 0 })
    let subtotal=precio*cant
    return {codigo, descrip, cant, precio, subtotal}
}

// console.log(generaPersona())
let datos=[]
for(let i=0; i<1000; i++){
    let carrito=[]
    for(let j=0; j<faker.number.int({min:1, max:15}); j++){
        carrito.push(generaProducto())
    }

    let total=carrito.reduce((a, prod)=>a+prod.subtotal,0)


    datos.push({fecha: faker.date.recent({ days: 10 }), cliente:generaPersona(), carrito, total})
}

console.log(JSON.stringify(datos,null, 5))
