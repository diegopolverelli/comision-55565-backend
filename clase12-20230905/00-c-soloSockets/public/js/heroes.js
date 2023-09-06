const socket=io()

console.log('heroes script')

socket.emit('saludo','juan')

let formHeroes=document.getElementById('heroes')
let inputHeroe=document.getElementById('heroe')

formHeroes.addEventListener('submit',evt=>{
    evt.preventDefault()
    
    if(inputHeroe.value.trim()!==''){
        socket.emit('nuevoHeroe',inputHeroe.value)
        console.log(`Envió ${inputHeroe.value}`)
        inputHeroe.value=''
    }
})