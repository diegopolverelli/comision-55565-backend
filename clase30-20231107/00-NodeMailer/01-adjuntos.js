import nodemailer from 'nodemailer'

const transporter=nodemailer.createTransport({
    service:'gmail',
    port: 587,
    auth: {
        user: 'diegopolverelli@gmail.com',
        pass: 'jvncumjsxcxemwcl'
    }
})

const enviar=async()=>{
    return transporter.sendMail({
        from: "Diego <diegopolverelli@gmail.com>",
        to: "diegopolverelli@hotmail.com",
        subject: "prueba email con adjuntos",
        // text: "",
        html: `
        <p style="color:blue;">Prueba de email con adjuntos</p>
        `,
        attachments: [
            {
                path: './images/diego10.jpg',
                filename: 'diego10.jpg'
            },
            {
                path: './images/lio.jpg',
                filename: 'lio.jpg'
            },
            {
                path: './images/lio2.jpg',
                filename: 'lio2.jpg'
            },
        ]
    })
}

enviar()
    .then(resultado=>console.log(resultado))
    .catch(error=>console.log(error))