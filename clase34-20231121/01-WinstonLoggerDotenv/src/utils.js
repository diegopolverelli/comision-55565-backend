import {fileURLToPath} from 'url';
import { dirname } from 'path';
import winston from 'winston'
import { config } from './config/config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default __dirname;

const customLevels={
    niveles:{errorGrave:0, errorLeve:1, aviso:2, info:3},
    colores:{errorGrave:"bold white redBG", errorLeve: "red", aviso:"yellow", info:"blue"}
}

const logger=winston.createLogger({
    levels: customLevels.niveles,
    transports:[
        new winston.transports.File({
            filename: './logWarnError.log',
            level: 'errorLeve',
            format: winston.format.combine(
                // winston.format.colorize({
                //     colors: customLevels.colores
                // }),
                winston.format.timestamp(),
                winston.format.json()
            )
        })
    ]
})

const trasporteConsola=new winston.transports.Console({
    level:'info',
    format: winston.format.combine(
        winston.format.colorize({
            colors: customLevels.colores
        }),
        winston.format.simple()
    )
})

if(config.MODE!=='production'){
    logger.add(trasporteConsola)
}

export const middLog=(req, res, next)=>{
    req.logger=logger
    next()
}