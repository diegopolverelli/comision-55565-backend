import dotenv from 'dotenv'

dotenv.config({path:'./src/.env', override:true})

export const config={
    PERSISTENCE:process.env.PERSISTENCE||"FS"
}