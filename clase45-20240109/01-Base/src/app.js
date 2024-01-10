import express from 'express';
import stripe from 'stripe'
const PORT=3000;

const app=express();

// 3) conectar el backend a Stripe
const stripeInstance=stripe("sk_test_51NNIBNChliO4FK21u6U68uqoQjpI5bS9HTfPhMo6RAXY1cp029rvMUSmBtnS9UyDAoJyyYs4lmt6G8rOs9JwZpVu00sbnaTj3R")

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("./src/public"))

app.post('/create-payment-intent',async(req,res)=>{

    let {importe}=req.body

    // 4) el back se conecta a stripe y genera el paymentIntent
    const paymentIntent=await stripeInstance.paymentIntents.create(
        {
            amount:importe,
            currency: 'usd'
        }
    )

    console.log(paymentIntent)

    res.setHeader('Content-Type','application/json');
    res.status(200).json({clientSecret:paymentIntent.client_secret});
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
