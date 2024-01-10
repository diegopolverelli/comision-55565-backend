
// 1) conectar front a Stripe}
const stripe=Stripe("pk_test_51NNIBNChliO4FK21Ci0bZ98dxe0YqCWfAr0rm7nMf3ggTpPhr92sbMBRaiO71OeFHbFHc18BNF7R3vAH3wkH75hB00uUqZZpXz")
let elements

const cargarMedios=async()=>{
    let importe=10

    if(parseFloat(document.getElementById("importe").value) <1 ){
        alert("No se pueden procesar pagos menores a 1")
        return
    }

    importe=parseFloat(document.getElementById("importe").value)*100

    // 2) realizar la peticion al back del paymentIntent
    const response=await fetch("/create-payment-intent", {
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({importe})
    })

    const {clientSecret}=await response.json()
    console.log(clientSecret)

    // 5) generar el "elements", que son los medios de pago, y agregarlos con mount a nuestro html
    elements=stripe.elements({clientSecret})
    const paymentElement=elements.create("payment")
    paymentElement.mount("#payment-element")

} // fin cargaMedios()

const pagar=async()=>{
    // 6) confirmar el pago a stripe

    const resultado=await stripe.confirmPayment(
        {
            elements,
            confirmParams:{
                return_url: "http://localhost:3000/index.html"
            }
        }
    )

    // lo siguiente solo se ejecuta si hay algún error
    console.log(resultado.error.message)
    document.getElementById("resultado").innerHTML=resultado.error.message
}


const mostrarResultado=async()=>{
    // 7) recuperar la información sobre el proceso del pago y mostrarla la usuario en el front
    const {paymentIntent}=await stripe.retrievePaymentIntent(clientSecret)
    console.log(paymentIntent)
    document.getElementById("resultado").innerHTML=paymentIntent.status
}

// verificar en la url si llega algún query param llamado "payment_intent_client_secret"
// que indicaría que se acaba de procesar un pago
const clientSecret= new URLSearchParams(window.location.search).get("payment_intent_client_secret")

if(clientSecret){
    mostrarResultado()
}


