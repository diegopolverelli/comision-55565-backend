console.log("Argumentos pasados x CLI:", process.argv)

let argumentos=process.argv.slice(2)
console.log(argumentos)
argumentos=argumentos.map(arg=>arg.toUpperCase())
if(argumentos.includes("--PORT")){
    let indice=argumentos.indexOf("--PORT")
    console.log(`El app correrá en el puerto ${argumentos[indice+1]}`)  
}else{
    console.log("Ingrese el --port")
}