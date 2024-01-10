import express from 'express';
// SDK de Mercado Pago
import { MercadoPagoConfig, Preference } from 'mercadopago';
// Agrega credenciales
const client = new MercadoPagoConfig({ accessToken: 'TEST-8397403180043474-010914-d0c9861fd531d78d8811cf55f7c3d7c3-191442195' });

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./src/public"))

app.post('/pagar', async (req, res) => {

    let {importe}=req.body
    importe=parseFloat(importe)
    if(importe<1 || isNaN(importe)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Importe inválido`})
    }

    const preference = new Preference(client);

    let resultado=await preference.create({
        body: {
            items: [
                {
                    id: 'CODIGO_PRUEBA',
                    title: 'PRODUCTO_PRUEBA',
                    quantity: 1,
                    unit_price: importe
                }
            ],
        }
    });


    res.setHeader('Content-Type', 'application/json');
    res.status(200).json({id:resultado.id});
})

const server = app.listen(PORT, () => {
    console.log(`Server escuchando en puerto ${PORT}`);
});
