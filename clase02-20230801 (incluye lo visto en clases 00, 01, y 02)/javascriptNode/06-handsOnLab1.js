console.log(Array.isArray(77))
console.log(Array.isArray([]))
let arreglo=[1,2,3]
console.log(Array.isArray(arreglo))


function mostrarLista(lista=[]){

    if(!Array.isArray(lista)){
        console.log(lista,'no es de tipo array')
        return
    }

    if(lista.length===0){
        console.log('La lista ingresada no tiene elmentos')
        return
    }

    // lista.forEach((elemento)=>{
    //     console.log(elemento)
    // })

    lista.forEach(elemento=>console.log(elemento));

    console.log(`La longitud de la lista ingresada es de ${lista.length} elementos`)

}

mostrarLista([1,2,3,4,5])
mostrarLista()
mostrarLista(['a','b','c'])
mostrarLista(['a','b','c','miguel angel'])
mostrarLista(77)