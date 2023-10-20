import dotenv from 'dotenv'
import { Command, Option } from 'commander'

let program=new Command()

program
    .addOption(new Option("-m, --mode <modo>", "Modo en que corre el app").choices(["development","production"]).default("development"))
    .parse()


let entorno=program.opts().mode
dotenv.config({path:entorno==="production"?"./.env.production":"./.env.development", override:true})

export const config={
    PORT:process.env.PORT||3000
}