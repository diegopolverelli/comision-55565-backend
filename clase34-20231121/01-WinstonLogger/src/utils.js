import {fileURLToPath} from 'url';
import { dirname } from 'path';
import winston from 'winston'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default __dirname;

const transporteHttp=new winston.transports.Http({
    host: 'localhost', port:3000, path:'/logs',
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    )
})

const filtroInfo=winston.format((datos)=>{
    // console.log(datos)
    if(datos.level==='info'){
        datos.message=datos.message.toUpperCase()
        datos.usuario='ADMIN'
        datos.infoAdicional='Info...'
        return datos
    }
})

const logger=winston.createLogger({
    level: 'silly',
    transports: [
        // transporteHttp,
        new winston.transports.Console({
            // level:'info',
            // format: winston.format.simple(),
            // format: winston.format.prettyPrint(),
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.colorize({colors:{error:'bold white redBG'}}),
                winston.format.simple()
            )
        }),
        new winston.transports.File({
            filename: './logWarnError.log',
            level: 'warn'
        }),
        new winston.transports.File({
            filename: './soloInfo.log',
            level: 'info',
            format: winston.format.combine(
                filtroInfo(),
                winston.format.timestamp(),
                winston.format.json()
            )
        })

    ]
})

let http=true
if(http){
    logger.add(transporteHttp)
}
// trabajar con var de entorno, y loguear en consola por ej, si estamos en 
// modo development


export const middLog=(req, res, next)=>{
    req.logger=logger
    next()
}