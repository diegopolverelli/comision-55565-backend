let texto=`Un hombre se confunde, gradualmente, con la firma
de su destino; un hombre es, a la larga, 
sus circunstancias`

// console.log(texto)
// console.log(texto.replace('hombre','HOMBRE'))
// console.log(texto.replace(/hoMbRE/ig,'HOMBRE'))
// console.log(texto.replaceAll('hombre','HOMBRE Y MUJER'))
// console.log(texto.replaceAll(/homBrE/ig,'HOMBRE Y MUJER'))





let code=0
let newCode=200
// code||=newCode
// console.log(code)

// contador+=1


code='juan'
newCode=200
// code&&=newCode
// console.log(code)


code=undefined
newCode=200
// code??=newCode
// console.log(code)



let persona={
    nombre:'Juan',
    apellido:'Molina',
    edad:39,
    nacionaldad:'Uruguay',
    email:'jmolina@test.com'
}

console.log(Object.hasOwn(persona,'edad'))
console.log(Object.hasOwn(persona,'email'))
console.log(Object.hasOwn(persona,'password'))


const suma=(a,b,secs)=>{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            if(a===0) rej('error...!!!')
            // console.log(a)
            res(a+b)
        },secs*1000)
    })
}

suma(4,4,2).then(res=>console.log(res))
let resultado=Promise.any([suma(0,4,2), suma(0,2,1), suma(0,8,3), suma(0,1,.5)])
resultado.then(res=>console.log('resultado:',res)).catch(e=>console.log(e))

// let resultado= Promise.all([suma(0,4,2), suma(0,2,1), suma(0,8,3), suma(0,1,.5)])
// // console.log(resultado)
// resultado.then(res=>console.log(res)).catch(e=>console.log(e))

// let resultado=Promise.race([suma(4,4,2), suma(2,2,1), suma(0,8,3), suma(5,1,.5)])
// resultado.then(res=>console.log(res)).catch(e=>console.log(e))
