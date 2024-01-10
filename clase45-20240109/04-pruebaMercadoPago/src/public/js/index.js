const cargarMedios = async () => {
    let importe = parseFloat(document.getElementById("importe").value)
    if(importe<1 || isNaN(importe)){
        alert("Ingrese un importe mayor a 0")
        return 
    }

    const mp = new MercadoPago('TEST-0d0e7a31-9c9d-47f3-bb1c-724032988d83', {
        locale: 'es-AR' // The most common are: 'pt-BR', 'es-AR' and 'en-US'
    });
    const bricksBuilder = mp.bricks();


    let respuesta = await fetch("http://localhost:3000/pagar", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ importe })
    })
    let datos = await respuesta.json()

    let id = datos.id

    bricksBuilder.create("wallet", "wallet_container", {
        initialization: {
            // preferenceId: "<PREFERENCE_ID>",
            preferenceId: id,
        },
        customization: {
            texts: {
                valueProp: 'smart_option',
            },
        }
    });


}

