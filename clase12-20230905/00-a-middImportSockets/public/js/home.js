
socket=io()

let divHeroes=document.getElementById('heroes')

socket.on('altaHeroe',mensaje=>{
    console.log(mensaje.mensaje, mensaje.heroe)

    divHeroes.innerHTML+=mensaje.heroe.nombre + '; '

})