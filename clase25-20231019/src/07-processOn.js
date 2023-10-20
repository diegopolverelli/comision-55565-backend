process.on("exit",(codigo)=>{
    console.log("Programa ha terminado...", codigo)
    if(codigo===-10){
        console.log("Salida forzada... codigo 10")
    }
})

process.on("uncaughtException",(error)=>{
    if(error){
        console.log(error.message)
    }
    console.log("pero sigue...")
})

setTimeout(()=>{
    console("Prueba")
},6000)


setTimeout(()=>{
    process.exit(-10)
},7000)

setTimeout(()=>{
    throw new Error("error cualquiera...")
},5000)

console.log("inicio programa")

let contador=1
let int01=setInterval(() => {
    console.log(contador)
    contador++
    if(contador>10){
        clearInterval(int01)
        console.log("fin programa")
    }
}, 1000);

