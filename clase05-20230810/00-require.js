// const fs=require('fs')
// fs.promises.re


const fs = require('fs').promises
fs.writeFile('./archivos/pruebaPromises1.txt','Hola...!!! con fs.writeFile(), de promises...!!!')
    .then('archivo guardado...!!!')   // accedería ahora de esta forma al writeFile que usa promesas


const grabaConPromesas=require('fs').promises.writeFile
const grabaSync=require('fs').writeFileSync
const leeSync=require('fs').readFileSync

    
grabaConPromesas('./archivos/pruebaPromises2.txt','Hola...!!! con grabaConPromesas()')
grabaSync('./archivos/pruebaSync.txt','Hola Sync...!!! con grabaSync()')
console.log(leeSync('./archivos/pruebaSync.txt','utf-8'))






