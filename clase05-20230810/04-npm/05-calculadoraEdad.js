const moment=require('moment')

let hoy=moment()
console.log(hoy)
let fecha1=moment('2023-08-10 22:30')
console.log(fecha1.fromNow())

let fecha_nacimiento=moment('1978-03-23')

if(fecha_nacimiento.isValid()){
    console.log(`Han transcurrido ${hoy.diff(fecha_nacimiento,'years')} años desde su nacimiento`)
    console.log(`Han transcurrido ${hoy.diff(fecha_nacimiento,'days')} dias desde su nacimiento`)
    console.log(`Han transcurrido ${hoy.diff(fecha_nacimiento,'hours')} horas desde su nacimiento`)

}else{
    console.log('fecha invalida')
}