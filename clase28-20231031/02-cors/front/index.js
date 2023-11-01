const datos1=async()=>{
    let respuesta=await fetch("http://localhost:3000/datos1")
    let datos=await respuesta.json()
    console.log(datos)
}