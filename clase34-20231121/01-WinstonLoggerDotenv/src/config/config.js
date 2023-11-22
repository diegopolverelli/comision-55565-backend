import dotenv from 'dotenv'

dotenv.config({path:'./src/.env', override:true})

export const config={
    PORT:process.env.PORT||3000,
    MODE:process.env.MODE||'production'
}