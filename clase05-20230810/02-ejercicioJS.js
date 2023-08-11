
// {
//     nombre:'Juan',
//     "1":300,
//     "2":24,
//     ...
//     "20":900

// }

let resultado={}

for(let i=0;i<10_000;i++){
    let valor=Math.floor(Math.random()*(20-1+1)+1) //Math.floor(Math.random()*(max-min+1)+min)

    if(resultado[valor]){
        resultado[valor]++
    }else {
        resultado[valor]=1
    }

}

console.log(resultado)

let valores=Object.values(resultado)
console.log(valores)
console.log(valores.reduce((acum, valor)=>acum+=valor,0))