let divOrdenes=document.getElementById("ordenes")
const cargaOrdenes=async()=>{
    let respuesta=await fetch("http://localhost:3000/api/ordenes")
    let info=await respuesta.json()

    // console.log(info)
    divOrdenes.innerHTML=''
    
    info.dato.forEach(orden=>{
        let divOrden=document.createElement("div")
        if(orden.items && orden.numeroOrden){ // la base de datos tenía registros viejos inconsistentes... con esto trabajo solo sobre los nuevos, que hicimos en clase
            // console.log(orden)
            let pDatos=document.createElement("p")
            let ulItems=document.createElement("ul")
            let hr=document.createElement("hr")

            pDatos.innerHTML=`Orden: ${orden.numeroOrden} - Cliente: <strong>${orden.usuario.nombre}</strong> - Local: <strong>${orden.negocio.nombre}</strong>`
            let ulHTML=''
            orden.items.forEach(item=>{
                ulHTML+=`<li>${item.nombre}    cantidad: ${item.cantidad}     subtotal: ${item.subtotal}</li>`
            })
            ulItems.innerHTML=ulHTML
            divOrden.append(pDatos, ulItems, hr)
        }
        divOrdenes.append(divOrden)
    })
}