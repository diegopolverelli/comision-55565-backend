
class TicketManager{
    constructor(){
        this.eventos=[]
    }

    addEvento(nombre, lugar, capacidad, fecha){
        let nuevoEvento={
            nombre,
            lugar:lugar,
            capacidad,
            fecha
        }

        if(this.eventos.length===0){
            nuevoEvento.id=1
        }else{
            // nuevoEvento.id=this.eventos.length+1
            // array1[array1.length -1].id + 1
            // this.eventos[this.eventos.length -1].id + 1
            nuevoEvento.id=this.eventos[this.eventos.length -1].id + 1
        }


        this.eventos.push(nuevoEvento)

    }

    getEventos(){
        return this.eventos
    }

    getEventoById(idEvento){

        let indiceEvento=this.eventos.findIndex(evento=>evento.id===idEvento)

        if(indiceEvento===-1){
            console.log(`El evento ${idEvento} no existe...!!!`)
            return
        }

        return this.eventos[indiceEvento]

    }

}

let tm=new TicketManager();

console.log(tm.getEventos())
tm.addEvento('afterClass 01', 'remoto x zoom', 100, new Date(2023,7,7))
tm.addEvento('Clase 4', 'remoto x zoom', 100, new Date(2023,7,3))
tm.addEvento('Clase 5', 'remoto x zoom', 100, new Date(2023,7,8))

console.log(tm.getEventos())

console.log(tm.getEventoById(2))
tm.getEventoById(14)


// let array1=[
//     {
//         nombre:'Martina',
//         id:1
//     },
//     {
//         nombre:'Ernesto',
//         id:2
//     },
//     {
//         nombre:'Jimena',
//         id:3
//     },
//     {
//         nombre:'Lorena',
//         id:4
//     },
//     {
//         nombre:'Lorena',
//         id:5
//     },
//     {
//         nombre:'Pedro',
//         id:6
//     },

// ]
// console.log(array1.length+1)
// console.log(array1[3])
// console.log(array1[5])
// console.log(array1[array1.length -1])
// console.log(array1[array1.length -1].id)
// console.log(array1[array1.length -1].id + 1)