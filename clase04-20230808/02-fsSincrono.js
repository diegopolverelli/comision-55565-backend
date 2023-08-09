const fs=require('fs')

let texto1=`La división internacional del trabajo consiste en que unos países se especializan
en ganar y otros en perder. Nuestra comarca del mundo, que hoy llamamos América Latina, fue
precoz: se especializó en perder desde los remotos tiempos en que los europeos del Renacimiento
se abalanzaron a travéz del mar y le hundieron los dientes en la garganta. Pasaron los siglos
y América Latina perfeccionó sus funciones.

Eduardo Galeano - Capítulo introductorio de "Las venas abiertas de Latinoamérica"`

let path='./archivos/textoSincrono.txt'

fs.writeFileSync(path,texto1)

if(fs.existsSync(path)){
    let textoRecuperado=fs.readFileSync(path,'utf-8')
    console.log(textoRecuperado)

    fs.appendFileSync(path,'\n\n\nEditorial Planeta')

    setTimeout(()=>{
        fs.unlinkSync(path)
    },3000)

}