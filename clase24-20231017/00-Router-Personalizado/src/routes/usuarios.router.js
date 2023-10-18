import { MiRouter } from "./router.js";



export class UsuariosRouter extends MiRouter{

    mid01(req, res, next){
        console.log('pasó por un middleware (método clase)...!!!')
        next()
    }

    init(){
        this.get('/', ['USUARIO', 'ADMIN'],this.mid01,(req, res, next)=>{
            console.log('pasó por un middleware...!!!')
            next()
        },(req, res)=>{
            // codigo...
            // res.send("mmm... funcionará todo esto...???")
            res.success("mmm... funcionará todo esto...???")
        })

        this.get('/compras', ['COMPRADOR', 'ADMIN'], (req, res)=>{
            res.success('Compras Page')
        })

        this.post('/', ['PUBLIC'], (req, res)=>{
            res.send('Objeto Creado...!!!')
        })
    }
}