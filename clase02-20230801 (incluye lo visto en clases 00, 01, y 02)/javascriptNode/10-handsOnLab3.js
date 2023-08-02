
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
            nuevoEvento.id=this.eventos.length+1
        }


        this.eventos.push(nuevoEvento)

    }

    getEventos(){
        return this.eventos
    }


}

let tm=new TicketManager();

console.log(tm.getEventos())
tm.addEvento('afterClass 01', 'remoto x zoom', 100, new Date(2023,7,7))
tm.addEvento('Clase 4', 'remoto x zoom', 100, new Date(2023,7,3))
tm.addEvento('Clase 5', 'remoto x zoom', 100, new Date(2023,7,8))

console.log(tm.getEventos())
