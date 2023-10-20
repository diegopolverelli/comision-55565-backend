import {Command, Option} from 'commander'

let program=new Command()

program
    .option("-p, --port <port>", "Puerto donde correrá el app", 3000)
    .option("-d, --debug", "Si esta presente el flag, activa el modo debug")
    .option("-l, --listadoValores [numeros...]", "Listado de valores a procesar", [])
    .requiredOption("-u, --user <usuario>", "Usuario que correrá el script")
    .addOption(new Option("-m, --mode <modo>", "Modo en que corre el app").choices(["development","production","testing"]).default("development"))
    .parse()


const opciones=program.opts()
console.log(opciones)

console.log(`Puerto: ${opciones.port}`, typeof opciones.port, typeof opciones.debug)

console.log(program.args)