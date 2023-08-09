const fs=require('fs')

let texto2=`El universo es una perversa inmensidad hecha de ausencia.
Uno no está en casi ninguna parte.
Sin embargo, en medio de las infinitas desolaciones hay una buena noticia: el amor.
Los Hombres Sensibles de Flores tomaban ese rumbo cuando querían explicar el cosmos. 
Y hasta los Refutadores de Leyendas tuvieron que admitir, casi sin reservas, que el amor
existe. Eso sí, nadie debe confundir el amor con la dicha. Al contrario: a veces se
piensa que amor y pena son una misma cosa. Especialmente en el barrio del Ángel Gris,
que es también el barrio del desencuentro.

Alejandro Dolina - fragmento del libro "Crónicas del Ángel Gris"`

let ruta='./archivos/textoCallbacks.txt'

fs.writeFile(ruta,texto2,(error)=>{
    if(error){
        console.log(error)
        return
    }
    console.log('Archivo guardado...!!!')

    fs.readFile(ruta,'utf-8',(error, resultado)=>{
        if(error){
            console.log(error)
            return
        }
        console.log(resultado)
    })

    fs.appendFile(ruta,'\n\n\nEditorial Sudamericana',(error)=>{
        if(error){
            console.log(error)
            return
        }
        console.log('Archivo modificado...!!!')

    setTimeout(()=>{
        fs.unlink(ruta,(error)=>{
            if(error){
                console.log(error)
                return
            }
            console.log('Archivo eliminado...!!!')
    
        })
    },2000)

    })

})

