import express from 'express';
import stripe from 'stripe'
import cors from 'cors'
const PORT=8080;

const stripeInstance=stripe("sk_test_51NNIBNChliO4FK21u6U68uqoQjpI5bS9HTfPhMo6RAXY1cp029rvMUSmBtnS9UyDAoJyyYs4lmt6G8rOs9JwZpVu00sbnaTj3R")

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors())

app.post("/api/payments/payment-intents", async(req,res)=>{

    console.log("Ingreso")
    let {id}=req.query

    const productos = [
        { id: 1, name: "papas", price: 1000 },
        { id: 2, name: "queso", price: 500 },
        { id: 3, name: "hamburguesa", price: 1500 },
        { id: 4, name: "soda", price: 1000 },
        { id: 5, name: "golosinas", price: 800 }
    ]

    let producto=productos.find(p=>p.id===parseInt(id))
    // faltaria validar existencia

    let dataPago={
        amount: producto.price,
        currency: "usd"
    }

    const paymentIntent=await stripeInstance.paymentIntents.create(dataPago)
    res.json({payload: paymentIntent})




})

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
