class Controlador{
    static #activo=true;
    constructor(equipo, sector="C", responsable="", estado=true){
        this.equipo=equipo;
        this.sector=sector;
        this.responsable=responsable;
        this.activo=estado;
    }

    cambiaEstado(){
        this.activo=!this.activo;
        return this.activo;
    }

    static cambiaEstadoGeneral(estado){
        Controlador.#activo=estado;
        return Controlador.#activo;
    }

}

let equipo1=new Controlador("XVZ81","Logistica","Raúl Lopez",true);
let equipo2=new Controlador("XVZ99","Ventas","Marina Begerman",true);


console.log(Controlador.cambiaEstadoGeneral(
    equipo1.cambiaEstado(false) || equipo2.cambiaEstado(true)
    ));
