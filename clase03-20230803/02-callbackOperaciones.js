
const calculo=(a,b,callback)=>{
    return callback(a,b)
}

console.log(calculo(5,5,(a,b)=>a+b))
console.log(calculo(5,5,(a,b)=>a-b))
console.log(calculo(5,5,(a,b)=>a*b))
console.log(calculo(5,5,(a,b)=>a/b))