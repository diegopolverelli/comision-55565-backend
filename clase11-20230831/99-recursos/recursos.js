https://glitch.happyfox.com/kb/article/59-can-i-change-the-version-of-node-js-my-project-uses/

// "engines": {
//     "node": "14.x"
//   },

let empresa='Marvel'

let esMarvel=empresa==='Marvel'?true:false
console.log(esMarvel)

esMarvel=empresa==='Marvel'
console.log(esMarvel)

Swal.fire({
    title:"Identifiquese",
    input:"text",
    text:"Ingrese su nickname",
    inputValidator: (value)=>{
        return !value && "Debe ingresar un nombre...!!!"
    },
    allowOutsideClick:false
})

Swal.fire({
    text:`${nombre} se ha conectado...!!!`,
    toast:true,
    position:"top-right"
})

divMensajes.scrollTop=divMensajes.scrollHeight;




<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>



