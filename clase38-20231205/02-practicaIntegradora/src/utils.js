import winston from 'winston'
import { config } from './config/config.js'

const logger=winston.createLogger(
    {
        level:'warn',
        transports:[
            new winston.transports.File({
                level:'warn',
                filename: './src/errores.log',
                format: winston.format.combine(
                    winston.format.timestamp(),
                    winston.format.prettyPrint()
                )
            })
        ]
    }
)

if(config.MODE!=='production'){
    // console.log('ingreso')
    logger.add(
        new winston.transports.Console({
            level:'silly',
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.timestamp(),
                winston.format.simple()
            )
        })
    )
}

export const middLog=(req, res, next)=>{
    req.logger=logger
    next()
}

