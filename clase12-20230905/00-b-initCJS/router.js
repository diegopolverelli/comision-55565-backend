const Router=require('express').Router
const router=Router()
const nombres=require('./app').nombres

console.log('Nombres:',nombres)

router.get('/',(req,res)=>{
    res.send('ok desde el router...!!!')
})

module.exports=router