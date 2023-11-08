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
        subject: "prueba email con adjuntos incrustados",
        // text: "",
        html: `
        <p style="color:brown;">Prueba de email con adjuntos incrustados</p>
        <img src="cid:adjunto01" width="300">
        <img src="cid:adjunto02" width="300">
        <img src="cid:adjunto03" width="300">
        <img src="https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/MESSI.jpg" width="300">

        `,
        attachments: [
            {
                path: './images/diego10.jpg',
                filename: 'diego10.jpg',
                cid: 'adjunto01'
            },
            {
                path: './images/lio.jpg',
                filename: 'lio.jpg',
                cid: 'adjunto02'
            },
            {
                path: './images/lio2.jpg',
                filename: 'lio2.jpg',
                cid: 'adjunto03'
            },
        ]
    })
}

enviar()
    .then(resultado=>console.log(resultado))
    .catch(error=>console.log(error))