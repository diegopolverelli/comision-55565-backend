const fs=require('fs')

let texto3=`
“Debe trabajar el hombre
Para ganarse su pan;
Pues la miseria, en su afán
De perseguir de mil modos,
Llama a la puerta de todos
Y entra en la del haragán”.

“Muchas cosas pierde el hombre
Que a veces la vuelve a hallar;
Pero los debo enseñar,
Y es güeno que lo recuerden:
Si la vergüenza se pierde,
Jamás se la vuelve a encontrar”.

José Hernandez - fragmento del Martin Fierro
`

let path='./archivos/textoPromesas.txt'

// fs.promises.writeFile(path, texto3)
//     .then(res=>{
//         console.log('archivo guardado')

//         fs.promises.readFile(path,'utf-8')
//             .then(textoRecuperado=>console.log(textoRecuperado))
//             .catch(e=>console(e))

//         fs.promises.appendFile(path,'\n\n\nEditorial Planeta')
//             .catch(e=>console(e))

//         fs.promises.unlink(path)
//             .then(console.log('archivo eliminado'))
//             .catch(e=>console(e))


//     })
//     .catch(e=>console.log(e))

const archivos=async()=>{
    await fs.promises.writeFile(path, texto3)
    let textoRecuperado=await fs.promises.readFile(path,'utf-8')
    console.log(textoRecuperado)
}

archivos()

const a1=async()=>{
    // let res1=await 2+2

    return 100
}
