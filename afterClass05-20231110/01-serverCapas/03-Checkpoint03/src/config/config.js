import dotenv from 'dotenv'

dotenv.config({path:'./src/.env', override:true})

export const config={
    server:{
        PORT:process.env.PORT||3050
    },
    database:{
        MONGO_URL:process.env.MONGO_URL,
        DB_NAME:process.env.DB_NAME,
    }
}