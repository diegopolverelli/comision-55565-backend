import os from 'os'
import fs from 'fs'
export const validaHeroe=(heroe)=>{

    let {name, ...otros}=heroe

    return `Error al dar de alta el heroe.
Argumentos esperados:
    - name: de tipo String - se recibió ${name}
Argumentos opcionales: 
    - team, publisher, powers, alias - se recibieron ${JSON.stringify(otros)}
    
Fecha: ${new Date().toUTCString()}
Usuario: ${os.userInfo().username}
Terminal: ${os.hostname()}

`
}