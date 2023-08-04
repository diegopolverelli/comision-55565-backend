// callback=(error, resultado)
function dividir(dividendo,divisor,callback){

    if(divisor===0){
        callback(new Error(`no se puede dividir por 0`))
        return
    }

    // if(divisor>1000){
    //     callback(new Error(`no se puede dividir por 0`))
    //     return
    // }

    // if(divisor>1000){
    //     callback(new Error(`no se puede dividir por 0`))
    //     return
    // }


    let resultado=dividendo/divisor

    callback(null, resultado)
}

dividir(10,5,(e,r)=>{
    if(e){
        console.log('hay un error')
        return
    }else{
        console.log(r)
    }

})

// dividir(10,0,x=>console.log(x))

// dividir(10,0,x=>console.log(3*x))

dividir(10,0,(e,r)=>{
    if(e){
        console.log('hay un error')
        return
    }

    console.log(r)
})


console.log('Fin del programa')
